import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import SideNav from './SideNav';

export const ProjectsTopNav = props => (
  <nav>
    <p> recent<span className='tag'
      onClick={()=> props.dispatch(toggleNav())}> projects</span>
    </p>
    <SideNav />
  </nav>
);

export default connect()(ProjectsTopNav);