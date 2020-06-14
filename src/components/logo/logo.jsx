import React, { Component } from 'react';

import logo from '../../assets/logo.jpg';
import './logo.less';

export default class Logo extends Component {


  render() {
    return (
      <div className="logo-wrap">
        <img  src={logo} alt="这是logo" className='logo-img'/>
      </div>
    );
  }
}
