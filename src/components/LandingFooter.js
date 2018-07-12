import React from 'react';
import '../styles/landing-footer.css';

const linkedInLogo = require('../assets/images/linkedIn.png');
const gitHubLogo = require('../assets/images/github.png');
export const LandingFooter = () => (
  <footer className='landing-footer'>
    <a href='https://www.linkedin.com/in/therealmckoy/'
      target='_blank'
      rel="noopener noreferrer">
      <img src={linkedInLogo} 
        className='linkedIn'
        alt='LinkedIn logo'/>
    </a>
    <a href='https://github.com/mckoyd'
      target='_blank'
      rel="noopener noreferrer">
      <img src={gitHubLogo} 
        className='gitHubLogo'
        alt='GitHub logo'/>
    </a>
  </footer>
);