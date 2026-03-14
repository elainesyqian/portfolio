import './App.css'

function App() {
  return (
    <div className="container">
      <div className="name-row">
        <h1>Elaine Qian</h1>
        <p className='cname'>(錢思遠)</p>
      </div>
      <hr />
      <ul className="bio-list">
        <li>cs @ uwaterloo</li>
        <li><a href="https://about.rogers.com/our-impact/ted-rogers-scholarships/">ted rogers legacy scholar</a> (100k)</li>
        <li>building with people in mind 🩶</li>
        <li>i love to play ultimate frisbee, cook (eat), and frolick in my spare time</li>
      </ul>
      <h2>previously</h2>
      <ul className="exp-list">
        <li>
          <div className="exp-first-row">
            <span className="exp-title">software dev intern @ rbc</span>
            <span className="date">summer 2025 + 2024</span>
          </div>
          <ul className="sub-list">
            <li>devops + automation for caribbean banking tech ⇒ 90x performance gain</li>
            <li>built a fullstack financial plan validation service</li>
          </ul>
        </li>
        <li>
          <div className="exp-row">
            <span className="exp-title">ski + snowboard instructor @ lakeridge</span>
            <span className="date">nov 2023 — mar 2025</span>
          </div>
          <ul className="sub-list">
            <li>sidequesting</li>
          </ul>
        </li>
      </ul>
      <h2>projects</h2>
      <ul className="proj-list">
        <li><a href="https://savebasketweaving.ca">savebasketweaving.ca</a> — emails MPPs to protest OSAP cuts</li>
      </ul>
      <hr />
      <p className='footer'>last updated: march 2026</p>
    </div>
  )
}

export default App
