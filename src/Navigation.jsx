import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isNotes = location.pathname === '/notes'

  return (
    <div className="nav-buttons">
      <Link to="/" className={`nav-button ${isHome ? 'active' : ''}`}>[home]</Link>
      <Link to="/notes" className={`nav-button ${isNotes ? 'active' : ''}`}>[notes]</Link>
    </div>
  )
}

export default Navigation
