// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className=" header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo"
        alt="wave"
      />
      <h1 className="blog-title"> Wave </h1>

      <div className="blog-container">
        <ul className="nav-menu">
          <li>
            <Link to="/"> Home </Link>
          </li>

          <li>
            <Link to="/about">About </Link>
          </li>

          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
