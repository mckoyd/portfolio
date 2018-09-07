import React from 'react';
import ProjectsTopNav from './ProjectsTopNav';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import '../styles/projects.css';

const rtMockup = require('../assets/images/rememberThatMockup.png');
const bkMockup = require('../assets/images/bonusKidMockup.png');
const syMockup = require('../assets/images/swedishFarmYardMockup.png');
export const Projects = props => (
  <div className='projects'>
    <div className='container'>
      <ProjectsTopNav />
      <div className='project'>
        <div className='mockup'>
          <a href='https://bonus-kid-client.herokuapp.com/'><img src={bkMockup} /></a>
          <div className='desc'>
            <h3>Bonus KID</h3>
            <p>With all the studying, extra-curricular activities, and other responsibilities, kids deserve a bonus! This app is designed to increase positive interaction between parents and children and encourage children to have better behavioral habits.</p>
            <p className='tech'>TECH STACK: Node, MongoDB, React, Redux, Redux-Forms, Thunk, Moment.js, Enzyme</p>
            <a href='https://bonus-kid-client.herokuapp.com/'>Visit Site</a>
            <a href='https://github.com/thinkful-ei20/bonus-kid-app-client/tree/master/client'>See GitHub Repository</a>
          </div>
          
        </div>
      </div>
      <div className='project'>
        <div className='mockup'>
          <a href='https://rememberthat.netlify.com/'><img src={rtMockup} /></a>
          <div className='desc'>
            <h3>Remember THAT!</h3>
            <p>A web application that gives prospective users a platform to keep track of IOU's (who a particular user owes money to), UOMe's (who owes a particular user money), and receipts (in which users can collect and customize).</p>
            <p className='tech'>TECH STACK: Node, MongoDB, React, Redux, Redux-Forms, Thunk</p>
            <a href='https://rememberthat.netlify.com/'>Visit Site</a>
            <a href='https://github.com/mckoyd/remember-that-client-v2'>See GitHub Repository</a>
          </div>
        </div>
      </div>
      <div className='project'>
        <div className='mockup'>
          <a href='https://swedish-yard.herokuapp.com/'><img src={syMockup} /></a>
          <div className='desc'>
            <h3>Swedish Farm Yard</h3>
            <p>The Swedish Farm Yard is a web application designed to help users learn Swedish via learning animals you might encounter on a farm.</p>
            <p className='tech'>TECH STACK: Node, MongoDB, React, Redux, Redux-Forms, Thunk</p>
            <a href='https://swedish-yard.herokuapp.com/'>Visit Site</a>
            <a href='https://github.com/mckoyd/spacedRepetition-client'>See GitHub Repository</a>
          </div>
        </div>
      </div>
      <i onClick={() => props.dispatch(toggleNav())}
        className='fa fa-angle-right fa-2x side' aria-hidden='true'></i>
    </div>
  </div>
);

export default connect()(Projects);