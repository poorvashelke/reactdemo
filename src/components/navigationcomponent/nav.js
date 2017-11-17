import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className= 'navigationSection'>
          <ul className= 'ulcomponent'>
            <li className= "first"><Link to="/">My University</Link></li>
            <li><Link to="/Products">My Subjects</Link></li>
            <li className= "last"><Link to="/Contacts">My Campus</Link></li>
          </ul>
        </nav>
    );
  }
}

export default Nav;