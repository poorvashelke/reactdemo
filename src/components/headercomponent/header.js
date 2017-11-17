import React, { Component } from 'react';
import img from './logo.png'

class Header extends Component {
  render() {
    return (
      <header>

        <div className = "logo">
         <img src={img} alt="logo"></img>
         <h3 className = "headerclass">PACE UNIVERSITY</h3>
        </div>

      </header>
    );
  }
}

export default Header;