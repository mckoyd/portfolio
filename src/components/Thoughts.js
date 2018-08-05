import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import NavModal from './NavModal';


export const Thoughts = props => (
  <div className='profile'>
    <h2>Thoughts</h2>
    <span 
      onClick={() => props.dispatch(toggleNav())}> the real mckoy
    </span>
    <NavModal />
  </div>
);

export default connect()(Thoughts);