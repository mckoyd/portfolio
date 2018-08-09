import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { Landing } from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';

export const Layout = () => (
  <div>
    <Route exact path='/' component={Landing} />
    <Route exact path='/about_me' component={AboutMe} />
    <Route exact path='/projects' component={Projects} />
  </div>
);

export default withRouter(Layout);