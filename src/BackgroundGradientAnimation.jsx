import { useEffect, useRef } from 'react'

const BLOBS = [
  { color: 'rgba(214, 198, 239, 0.7)', baseX: -5, baseY: 5,  phase: 0, w: '20%', h: '85%',
    drift: (t) => [Math.sin(t * 0.12) * 3, Math.cos(t * 0.08) * 4] },
  { color: 'rgba(246, 184, 212, 0.6)', baseX: 80, baseY: 25, phase: 2.1,  w: '25%', h: '80%',
    drift: (t) => [Math.sin(t * 0.07 + 1) * 4, -Math.cos(t * 0.1) * 3] },
  { color: 'rgba(183, 229, 217, 0.6)', baseX: 5, baseY: 65, phase: 4.2, w: '55%', h: '35%',
    drift: (t) => [Math.cos(t * 0.09 + 2) * 3, Math.sin(t * 0.12) * 4] },
  { color: 'rgba(245, 231, 187, 0.5)', baseX: 50, baseY: 0, phase: 1.5, w: '60%', h: '30%',
    drift: (t) => [-Math.sin(t * 0.1) * 4, Math.cos(t * 0.07 + 3) * 3] },
]

const lerp = (a, b, t) => a + (b - a) * t

function organicRadius(t, phase) {
  const a = 50 + 22 * Math.sin(t * 0.28 + phase)
  const b = 50 + 22 * Math.cos(t * 0.21 + phase + 0.8)
  const c = 50 + 22 * Math.sin(t * 0.33 + phase + 1.6)
  const d = 50 + 22 * Math.cos(t * 0.25 + phase + 2.4)
  const cl = n => Math.round(Math.max(20, Math.min(80, n)))
  return [cl(a), 100 - cl(a), 100 - cl(c), cl(c), cl(b), 100 - cl(b), cl(d), 100 - cl(d)]
}

function formatRadius(r) {
  return `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[5]}% ${r[6]}% ${r[7]}%`
}

export function BackgroundGradientAnimation() {
  const blobRefs = useRef([])
  const mouse = useRef({ x: -9999, y: -9999, active: false })

  const state = useRef(BLOBS.map(() => ({
    tx: 0, ty: 0, sc: 1,
    br: [50, 50, 50, 50, 50, 50, 50, 50],
  })))

  const raf = useRef(null)
  const t0 = useRef(Date.now())

  useEffect(() => {
    const onMove  = (e) => { mouse.current = { x: e.clientX, y: e.clientY, active: true } }
    const onLeave = () => { mouse.current = { ...mouse.current, active: false } }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    const tick = () => {
      const t = (Date.now() - t0.current) / 1000
      const W = window.innerWidth
      const H = window.innerHeight

      BLOBS.forEach((cfg, i) => {
        const el = blobRefs.current[i]
        if (!el) return

        const s = state.current[i]
        const [driftX, driftY] = cfg.drift(t)

        const wPct = parseFloat(cfg.w || '45') / 100
        const hPct = parseFloat(cfg.h || '45') / 100
        const halfW = W * wPct / 2
        const halfH = H * hPct / 2

        const cx = (cfg.baseX / 100) * W + halfW + (s.tx / 100) * W
        const cy = (cfg.baseY / 100) * H + halfH + (s.ty / 100) * H

        const dx = mouse.current.x - cx
        const dy = mouse.current.y - cy
        const normDist = Math.sqrt((dx / halfW) ** 2 + (dy / halfH) ** 2)
        const isInside = mouse.current.active && normDist < 1.0

        let tgtSC = 1
        let lp = 0.009

        if (isInside) {
          tgtSC = 2.5
          lp = 0.02
        } else {
          tgtSC = 1.0
          lp = 0.01
        }

        s.tx = lerp(s.tx, driftX, 0.009)
        s.ty = lerp(s.ty, driftY, 0.009)
        s.sc = lerp(s.sc, tgtSC, lp)
        s.br = s.br.map((v, idx) => lerp(v, organicRadius(t, cfg.phase)[idx], 0.009))

        el.style.transform    = `translate(${s.tx}vw, ${s.ty}vh) scale(${s.sc})`
        el.style.borderRadius = formatRadius(s.br)
      })

      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div className="bg-gradient-anim">
      {BLOBS.map((cfg, i) => (
        <div
          key={i}
          ref={el => (blobRefs.current[i] = el)}
          className="blob"
          style={{ background: cfg.color, left: `${cfg.baseX}%`, top: `${cfg.baseY}%`, ...(cfg.w && { width: cfg.w }), ...(cfg.h && { height: cfg.h }) }}
        />
      ))}
    </div>
  )
}
