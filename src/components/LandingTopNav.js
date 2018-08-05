import React from 'react';
import { connect } from 'react-redux';
import '../styles/landing-top-nav.css';
import { toggleNav } from '../actions';
import NavModal from './NavModal';

export const LandingTopNav = props => (
  <nav>
    <p>introducing  
      <span className='tag'
        onClick={() => props.dispatch(toggleNav())}> the real mckoy
      </span>
    </p>
    <NavModal />
  </nav>
);

export default connect()(LandingTopNav);