import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import '../styles/about-me.css';
import AboutMeTopNav from './AboutMeTopNav';


export const AboutMe = props => (
  <div className='about-me'>
    <div className='summary'>
      <AboutMeTopNav />
      <article>
        <p className='topic'>I love exploring the potential of new technology:</p>
        <p className='profile-article'>
          how it can help make learning more engaging and
          accessible to all people at all of levels of education,
          how it increases communication among people worldwide
          to collaborate on innovative projects that can change
          how we interact with the world, and how it bridges the
          gap among all professions. 
          And I love making 
          applications that are useful (and user-friendly), scalable, 
          visually aesthetic, and that overall make the world a fairer, 
          safer, and more comfortable place to live.
          Thus, my goal has always been to facilitate and showcase 
          the wonderful things technology can do.
        </p>
      </article>
      <a href='#resume' className='blurb'>what else mckoy?</a>
    </div>
    <div id='resume'>
      <div className='technical-skills'>
        <i className="devicon-javascript-plain fa-2x"></i>
        <i className="devicon-react-original-wordmark fa-2x"></i>
        <i className="devicon-chrome-plain-wordmark fa-2x"></i>
        <i className="devicon-css3-plain-wordmark fa-2x"></i>
        <i className="devicon-docker-plain-wordmark fa-2x"></i>
        <i className="devicon-express-original-wordmark fa-2x"></i>
        <i className="devicon-git-plain-wordmark fa-2x"></i>
        <i className="devicon-github-plain-wordmark fa-2x"></i>
        <i className="devicon-google-plain-wordmark fa-2x"></i>
        <i className="devicon-heroku-original-wordmark fa-2x"></i>
        <i className="devicon-html5-plain-wordmark fa-2x"></i>
        <i className="devicon-jasmine-plain-wordmark fa-2x"></i>
        <i className="devicon-jquery-plain-wordmark fa-2x"></i>
        <i className="devicon-linux-plain fa-2x"></i>
        <i className="devicon-mocha-plain fa-2x"></i>
        <i className="devicon-mongodb-plain-wordmark fa-2x"></i>
        <i className="devicon-nodejs-plain-wordmark fa-2x"></i>
        <i className="devicon-postgresql-plain-wordmark fa-2x"></i>
        <i className="devicon-python-plain-wordmark fa-2x"></i>
        <i className="devicon-ssh-plain-wordmark fa-2x"></i>
        <i className="devicon-travis-plain fa-2x"></i>
        <i className="devicon-visualstudio-plain-wordmark fa-2x"></i>
      </div>
      <div className="resume-content">
        <div className="resume-section">
          <div className='education'>
            <h2>Education</h2>
            <div>
              <h3>Rutgers University</h3>
              <p className='res-desc'>Triple major in English, Mathematics, and Biological Sciences</p>
            </div>
            <div>
              <h3>Thinkful</h3>
              <p>Computer Engineering: HTML5, CSS3, JS, jQuery, Node, React/Redux, ReduxForms, algorithms, data structures and test-driven development</p>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <div className='experience'>
            <h2>Experience</h2>
            <div>
              <h3>Educational Technology Specialist</h3>
              <p className='work-place'>@ Philip's Academy Charter School</p>
              <p><span>where I</span> run data analytics on standardized test scores using python and Excel, integrate technology in the existing curriculum, and facilitate professional development workshops on how technology can guide instruction.</p>
            </div>
            <div>
              <h3>Academic Advisor</h3>
              <p className='work-place'>@ Rutgers University</p>
              <p><span>where I</span> ran academic advisement for 200+ students, maintained and developed protocols for technological equipment, and oversaw course development and course preparation.</p>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <h3>Check out my <a href='https://www.linkedin.com/in/therealmckoy/'>LinkedIn</a> profile to learn more.</h3>
        </div>
        <i onClick={() => props.dispatch(toggleNav())}
          className='fa fa-angle-right fa-2x' aria-hidden='true'></i>
      </div>
    </div>
  </div>
);

export default connect()(AboutMe);