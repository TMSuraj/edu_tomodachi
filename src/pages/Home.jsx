import React from 'react';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import services from '../data/services'
import features from '../data/features';
import australia from '../assets/flags/australia.png';
import canada from '../assets/flags/canada.png';
import japan from '../assets/flags/japan.png';
import {Link} from 'react-router-dom';
import ImageSlider from '../components/ImageSlider.jsx';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__hero-section'>
        <div>
          <h1>Your Friend on the Journey to Global Education</h1>
          <p>Tomodachi Educational Foundation helps students discover
            opportunities, choose the right path, and achieve their study
            abroad goals with trusted guidance every step of the way.</p>
          <Link to='/contact'>Get Connected</Link>
        </div>
      </div>
      <div className='home__services-section'>
        <div className='section-title'>
          <span>areas what we serve</span>
          <h2>Our Services</h2>
        </div>
        <div>
          {services.map((service) => {
            return <ServiceCard key={service.id}
            source = {service.isource}
              title={service.sname}
              detail={service.description}
            />
          })}
        </div>
        <Link>Explore Services</Link>
      </div>
      <div className='home__about-section'>
     <img src="/seminar.JPG" alt="seminar" />
     <div>
       <div className='section-title'>
          <span>the story</span>
          <h2>About Us</h2>
        </div>
        <p>Established in 2011, Tomodachi Educational Foundation Pvt. Ltd. is a trusted educational 
          consultancy committed to helping Nepali students access quality international education and
           global opportunities. Starting with study programs in Japan and later expanding to Canada 
           and Australia, we provide professional guidance and personalized support to help students a
           chieve their academic and career goals abroad.</p>
          <Link to="/about">Learn More</Link>
     </div>
      </div>
      <div className='home__features-section'>
        <div className='section-title'>
          <span>some reasons</span>
          <h2>Why Choose Us</h2>
        </div>
        <div>
           {features.map((feature)=>{
            return <FeatureCard sn={feature.id}
            f_title = {feature.fname}
            f_detail = {feature.description}
            />
           })}
        </div>
      </div>
      <div className='home__destination-section'>
        <div className='section-title'>
          <span>top destination</span>
          <h2>International Opportunity</h2>
        </div>
           <div>
           <Link className='flag-container'><img src={australia} alt="australian flag" /></Link>
          <Link className='flag-container'> <img src={japan} alt="japanese flag" /></Link>
          <Link className='flag-container'> <img src={canada} alt="canadian flag" /></Link>
           </div>
      </div>
      <div className='home__gallery-section'>
        <div className='section-title'>
          <span>our memories</span>
          <h2>Gallery</h2>
        </div>
        <div>
          <ImageSlider/>
        </div>
      </div>
    </div>
  )
}

export default Home;