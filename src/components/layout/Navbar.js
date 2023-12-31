import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav className='navbar bg-primary'>
      <h1>
          <i className="fa-brands fa-github"></i>            
          {` `}{props.title ? props.title : 'Nothing'}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github-Finder'
}

export default Navbar;