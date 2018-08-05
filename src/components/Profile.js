import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import NavModal from './NavModal';
import '../styles/profile.css';


export const Profile = props => (
  <div className='profile-page'>
    <div className='profile'>
      <h1>Profile</h1>
      <article>
        <span className='topic'>I love exploring the potential of new technology:</span>
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
      <span className='blurb'>what else mckoy?</span>
      <a href='#resume'>&#x02193;</a>
    </div>
    <div id='resume'>
      <div className='technical-skills'>
        <img src={'http://www.bobbyberberyan.com/wp-content/uploads/2016/12/ES6LOGO.svg'} alt='javascript ES6 logo' />
        <img src={'http://logosrated.net/wp-content/uploads/parser/React-Logo-1.png'} alt='react logo'/>
        <img src={'https://cdn-images-1.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png'} alt='redux logo' />
        <img src={'https://raw.githubusercontent.com/erikras/redux-form/master/logo.png'} alt={'redux forms logo'} />
        <img src={'https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/pic_logo.png?fit=500%2C500&ssl=1'} alt={'json web token logo'} />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png'} alt={'HTML5 logo'} />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png'} alt={'CSS3 logo'} />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/2000px-Gnome-preferences-desktop-accessibility2.svg.png'} alt={'web accessibility logo'} />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png'} alt={'Node.js logo'} />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/2000px-Antu_mongodb.svg.png'} alt={'MongoDB logo'} />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Database-postgres.svg/2000px-Database-postgres.svg.png'} alt={'postgresql logo'} />
        <img src={'https://apps.odoo.com/apps/icon_image?module_id=37657'} alt={'RESTful API logo'} />
        <img src={'https://devstickers.com/assets/img/pro/4gem.png'} alt={'mocha logo'} />
        <img src={'https://avatars2.githubusercontent.com/u/1515293?s=400&v=4'} alt={'chai logo'} />
        <img src={'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png'} alt={'git and github logo'} />
        <img src={'http://www.stickpng.com/assets/images/58480873cef1014c0b5e48ea.png'} alt={'heroku logo'} />
        <img src={'https://cdn3.iconfinder.com/data/icons/seo-web-1/128/seo-58-512.png'} alt={'hand over a phone with a finger touching the screen'} />
        <img src={'https://www.raspberrypi.org/wp-content/uploads/2015/08/raspberry-pi-logo.png'} alt={'raspberry pi logo'} />
      </div>
      <div className='philips'>
        <img src={'http://img1.wsimg.com/isteam/ip/78bbd227-bb88-480b-ab78-49bce9890cbb/99a92de1-2199-4e0e-a508-f3599eb71b8d.png/:/cr=t:7.63%25,l:7.63%25,w:84.75%25,h:84.75%25/rs=w:223,h:223,cg:true,m'} alt={'school crest for Philip\'s Academy Charter School'} />
        <div className='philips-desc'>
          <h2>Education Technology Specialist</h2>
          <h3>Philip's Academy Charter School</h3>
        </div>
      </div>
      <div className='rutgers'></div>
      <div className='education'></div>
      <p className='profile-nav'>find out more about<span onClick={() => props.dispatch(toggleNav())}> the real mckoy</span></p>
      <NavModal />
    </div>
  </div>
);

export default connect()(Profile);