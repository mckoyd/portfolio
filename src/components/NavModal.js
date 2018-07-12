import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import '../styles/nav-modal.css';

const mapStateToProps = state => ({
  navView: state.main.navView
});

export const NavModal = props => {
  return(
    <div className={`modal ${props.navView ? 'visible' : ''}`}>
      <div className='modal-content'>
        <h3>Profile</h3>
        <p><span>Learn more</span> about my experience at a few of the places I've worked.</p>
        <h3>Thoughts</h3>
        <p><span>Read some</span> thought-provoking articles on software development, education, literature, and much more.</p>
        <h3>Projects</h3>
        <p><span>View some</span> screenshots of my projects that are still in production.</p>
        <h3>Have Ideas?</h3>
        <p><span>Have an idea</span> for an app that you would like me to try? Click here to tell me more.</p>
        <button className='btn' id='nav-home-btn'
          onClick={() => props.dispatch(toggleNav())}>back <span>to home page</span></button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(NavModal);