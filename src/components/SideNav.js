import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { toggleNav } from '../actions';
import '../styles/side-nav.css';

const mapStateToProps = state => ({
  navView: state.main.navView
});

export const SideNav = props => {
  return(
    <nav className={`nav-menu ${props.navView ? 'visible' : ''}`}>
      <i className='fa fa-times fa-lg close' aria-hidden='true'
        onClick={() => {
          props.dispatch(toggleNav());
        }}></i>
      <Link to='/about_me'
        onClick={() => props.dispatch(toggleNav())}><h3>About Me</h3></Link>
      <p className='nav-desc'><span>Learn more</span> about me and my experience in technology and education.</p>
      <Link to='/projects'
        onClick={() => props.dispatch(toggleNav())}><h3>Projects</h3></Link>
      <p className='nav-desc'><span>View some</span> screenshots of my projects that are still in production.</p>
      <h3>Contact Me</h3>
      <p className='nav-desc'><span>Find me</span> on <a href='https://www.linkedin.com/in/therealmckoy/'>LinkedIn</a> to contact me for future projects. You can also look at some of my ongoing projects via <a href='https://github.com/mckoyd'>GitHub</a>.</p>
      <Link className='home-btn' 
        onClick={() => props.dispatch(toggleNav())}
        to='/'><p>Back to Home</p></Link>
    </nav>
  );
};

export default connect(mapStateToProps)(SideNav);