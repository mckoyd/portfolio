import React from 'react';
import LandingTopNav from './LandingTopNav';
import { LandingHeader } from './LandingHeader';
import LandingFooter from './LandingFooter';
import '../styles/landing.css';

export const Landing = () => (
  <div className='landing'>
    <LandingTopNav />
    <LandingHeader />
    <LandingFooter />
  </div>
);