import './App.css'

function App() {
  return (
    <div className="page">
    <div className="container">
      <div className="name-row">
        <h1>Elaine Qian</h1>
        <p className='cname' data-tooltip="qián sī yuǎn">錢思遠</p>
      </div>
      <hr />
      <ul className="bio-list">
        <li><a href="https://cs.uwaterloo.ca/">cs @ uwaterloo</a></li>
        <li><a href="https://about.rogers.com/our-impact/ted-rogers-scholarships/">ted rogers legacy scholar</a> (100k)</li>
        <li>building the code that builds a better world 🌎</li>
        <li>i love puzzles, ultimate frisbee, cooking (eating), and frolicking in my spare time</li>
      </ul>
      <h2>previously</h2>
      <ul className="exp-list">
        <li>
          <div className="exp-row">
            <span className="exp-title">software dev intern @ <a href="https://www.rbcroyalbank.com/">rbc</a></span>
            <span className="date">summer 2025 + 2024</span>
          </div>
          <ul className="sub-list">
            <li>devops + automation for caribbean banking tech → 90x performance gain</li>
            <li>built a fullstack financial plan validation service</li>
          </ul>
        </li>
        <li>
          <div className="exp-row">
            <span className="exp-title">ski + snowboard instructor @ <a href="https://ski-lakeridge.com/">lakeridge</a></span>
            <span className="date">nov 2023 — mar 2025</span>
          </div>
          <ul className="sub-list">
            <li>in the wild 🏂</li>
          </ul>
        </li>
      </ul>
      <h2>projects</h2>
      <ul className="proj-list">
        <li><a href="https://savebasketweaving.ca">savebasketweaving.ca</a> — emails MPPs to protest OSAP cuts</li>
      </ul>
    </div>
    <div className='footer-section'>
      <hr />
      <div className='footer-content'>
        <p className='footer'>🧩 last updated: march 2026</p>
        <div className='footer-links'>
          <a href="https://linkedin.com/in/elaineqian/">[linkedin]</a>
          <a href="https://github.com/elainesyqian/">[github]</a>
          <a href="/resume.pdf">[resume]</a>
          <a href="mailto:elaineqian360@gmail.com">[email]</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
