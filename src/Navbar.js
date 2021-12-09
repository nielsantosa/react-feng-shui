import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo_99.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-logo">
        <a
          href='https://www.99.co'
          target='_blank'
          rel="noreferrer"
        >
          <img src={logo} alt="99_logo" />
        </a>
      </div>
      <div className="navbar-help">
        <p>Help</p>
      </div>
    </nav>
  )
}

export default Navbar;
