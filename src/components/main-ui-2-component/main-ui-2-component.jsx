import React from 'react';
import './main-ui-2-component.css';

import Navbar from 'react-bootstrap/Navbar';


import refugeecamp from '../../Videos/refugeecamp.mp4';

import Logo from '../../Videos/refugeecamp.jpg';
import FormC from '../form-component/form-component';

const MainUI2 = () => (
  <div className="showcase">
    <div className="video-container">
      <video src={refugeecamp} autoPlay muted loop></video>
    </div>
  <div className="content">
  <Navbar bg="light" variant="light" className='visibility'>
  <Navbar.Brand href="#home" className='center'>
    <img
      alt=""
      src={Logo}
      width="130"
      height="90"
      className="d-inline-block align-top align-center ml-5"
    />{'  '}
  </Navbar.Brand>
  <p className="downscale">REFUGEE CAMP DONATION</p>
  </Navbar>
  <FormC />
  </div>
  </div>
);

export default MainUI2;