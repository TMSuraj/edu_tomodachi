import React from 'react';
import director from  '../assets/images/director.png';
import TeamCard from '../components/TeamCard';
import members from '../data/members.js';
import setps from "../data/steps.js";
import ProcessCard from '../components/ProcessCard.jsx';
import '../styles/about.css';
import steps from '../data/steps.js';

const About = () => {
  return (
    <div className='about'>
      <div className='about__title-section'><h2>About Us</h2></div>
      <div className='about__intro-section'>
        <div className='intro__img-container'><img src={director} alt="managing director" /></div>
        <div>
          <div className='section-title'>
            <span>the background</span>
            <h2>Who We Are</h2>
          </div>
          <p>Tomodachi Educational Foundation Pvt. Ltd., established in 2011, is a trusted 
            educational consultancy dedicated to helping Nepali students pursue quality 
            international education and broaden their global horizons. Since its inception, 
            the institution has been committed to providing reliable guidance, personalized 
            counseling, and comprehensive support to students seeking academic opportunities abroad. 
            Guided by the belief that education opens doors to a brighter future, Tomodachi strives 
            to connect students with world-class learning environments and valuable international 
            experiences.</p>
          <p>Beginning its journey with student placements in Japan, Tomodachi Educational Foundation 
            has successfully assisted numerous students in achieving their educational goals overseas. 
            Over the years, the organization has expanded its services to include study opportunities 
            in Australia and, more recently, Canada. With a mission to create global opportunities and 
            exposure for Nepali students, and a vision to become a trustworthy name in the educational 
            consultancy sector, Tomodachi continues to empower students with the knowledge, guidance, 
            and confidence needed to succeed in an increasingly interconnected world.</p>
        </div>
      </div>
      <div className='about__approach-section'>
        <div className='section-title'>
          <span>the steps</span>
          <h2>Our Approach</h2>
        </div>
        <div>
          {steps.map((step)=>{
            return<ProcessCard sn={step.id}
            title={step.topic}
            detail= {step.description}/>
          })}
        </div>
      </div>
      <div className='about__team-section'>
        <div className='section-title'>
          <span>expert minds</span>
          <h2>Meet The Team</h2>
        </div>
        <div>
          {members.map((member)=>{
            return <TeamCard key={member.id}
            source={member.source}
            tname = {member.name}
            post={member.designaiton}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default About;