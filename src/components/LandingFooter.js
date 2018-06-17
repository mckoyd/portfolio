import React from 'react';
import '../styles/landing-footer.css';

const linkedInLogo = require('../assets/images/linkedIn.png');
const gitHubLogo = require('../assets/images/github.png');
export const LandingFooter = () => (
  <footer className='landing-footer'>
    <img src={linkedInLogo} 
      className='linkedIn'
      alt='Picture of LinkedIn logo'/>
    <img src={gitHubLogo} 
      className='gitHubLogo'
      alt='Picture of GitHub logo'/>
  </footer>
);