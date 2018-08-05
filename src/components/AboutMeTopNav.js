import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import SideNav from './SideNav';

export const AboutMeTopNav = props => (
  <nav>
    <p> about<span className='tag'
      onClick={()=> props.dispatch(toggleNav())}> me</span>
    </p>
    <SideNav />
  </nav>
);

export default connect()(AboutMeTopNav);