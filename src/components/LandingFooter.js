import React from 'react';
import '../styles/landing-footer.css';

const linkedInLogo = require('../assets/images/linkedIn.png');
const gitHubLogo = require('../assets/images/github.png');
export const LandingFooter = () => (
  <footer>
    <img src={linkedInLogo} alt='Picture of LinkedIn logo'/>
    <img src={gitHubLogo} alt='Picture of GitHub logo'/>
  </footer>
);