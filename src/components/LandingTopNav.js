import React from 'react';
import { connect } from 'react-redux';
import '../styles/landing-top-nav.css';
import { toggleNav } from '../actions';
import SideNav from './SideNav';

export const LandingTopNav = props => (
  <nav>
    <p>introducing  
      <span className='tag'
        onClick={() => props.dispatch(toggleNav())}> the real mckoy
      </span>
    </p>
    <SideNav />
  </nav>
);

export default connect()(LandingTopNav);