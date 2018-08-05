import React from 'react';
import '../styles/landing-footer.css';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';

export const LandingFooter = props => (
  <footer className='landing-footer'>
    <i onClick={() => props.dispatch(toggleNav())}
      className='fa fa-angle-right fa-2x' aria-hidden='true'></i>
  </footer>
);

export default connect()(LandingFooter);