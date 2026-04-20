import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function Notes() {
  return (
    <div className="page">
      <BackgroundGradientAnimation />
      <Analytics />
      <SpeedInsights/>
      <div className="container">
      <div className="name-row">
        <h1>Notes</h1>
        <p className='cname' data-tooltip="bǐ jì">筆記</p>
      </div>
      <hr />
        <ul className="bio-list">
        <li>"crash course"/condensed studysheets are my holy grail for finals + reviewing material</li>
        <li>course content may change, so please <b>use at your own discretion</b></li>
        </ul>
    <h2>winter 2026</h2>
      <ul className="exp-list">
        <li>
          <div className="exp-row">
            <span className="exp-title"><a href="/notes/winter26/math136.pdf">math 136</a><span className="course-name">: linear algebra 1</span></span>
          </div>
        </li>
        <li>
          <div className="exp-row">
            <span className="exp-title"><a href="/notes/winter26/math138.pdf">math 138</a><span className="course-name">: calculus 2</span></span>
          </div>
        </li>
        <li>
          <div className="exp-row">
            <span className="exp-title"><a href="/notes/winter26/phys111.pdf">phys 111</a><span className="course-name">: physics 1</span></span>
          </div>
        </li>
      </ul>

    <h2>fall 2025</h2>
      <ul className="exp-list">
        <li>
          <div className="exp-row">
            <span className="exp-title"><a href="/notes/fall25/math135.pdf">math 135</a><span className="course-name">: algebra</span></span>
          </div>
        </li>
        <li>
          <div className="exp-row">
            <span className="exp-title"><a href="/notes/fall25/math137.pdf">math 137</a><span className="course-name">: calculus 1</span></span>
          </div>
        </li>
      </ul>

    <div className="disclaimer-section">
    <h3>DISCLAIMER</h3>
      <ul className="proj-list">
        <li>you may use/distribute these notes given you credit me, <b>Elaine Qian</b>, and the <b>University of Waterloo</b></li>
        <li>not looking to step on any IP rights; will take things down upon request</li>
      </ul>
    </div>
    </div>

    <div className='footer-section'>
      <hr />
      <div className='footer-content'>
        <p className='footer'>🧩 last updated: april 2026</p>
        <div className='footer-links'>
          <a href="https://linkedin.com/in/elaineqian/">[linkedin]</a>
          <a href="https://github.com/elainesyqian/">[github]</a>
          <a href="/Elaine_Qian_Resume.pdf">[resume]</a>
          <a href="mailto:elaineqian360@gmail.com">[email]</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Notes
