import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Button from 'react-bootstrap/Button'

import './Intro-component.css';

import {Link} from 'react-router-dom';

const Intro = () => (
  <div className="Z">
    <div className="row">
      <div className="col-md-12">
      <Jumbotron className='mn-2 border-ra bg-dark text-light mx-auto my-6' variant='bg-light'>
          <p><b>Refugee camps are temporary facilities built to provide immediate protection and assistance to people who have been forced to flee their homes due to war,
            persecution or violence. While camps are not established to provide permanent solutions, they offer a safe haven for refugees and meet their most basic needs such as
            food, water, shelter, medical treatment and other basic services during emergencies.</b>
            <i>Imagine spending your childhood in a refugee camp: being unable to attend school, having no permanent home, living in danger of exploitation.
            You can show God's love to these vulnerable kids and families, right where they are.
            And thanks to public grants, your gifts will multiply 7 times in impact!</i>
        </p>
        <h5>WE HELP THE NEEDY, YOU CAN DONATE TO US BY USING THE LINK BELOW.</h5>
        <p className='middle'>
  <Link to='/Payment'>
  <Button variant="success" className='p-2 px-5 middle'>DONATE!</Button>
  </Link>
   </p>
      </Jumbotron>
      </div>
    </div>

  </div>
);

export default Intro;