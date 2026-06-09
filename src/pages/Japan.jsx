import React from 'react';
import fuji from '../assets/images/fuji.jpg';
import jreasons from '../data/japan_reasons';
import '../styles/japan.css';
import FeatureCard from '../components/FeatureCard';

const Japan = () => {
  return (
    <div className='japan'>
      <div className='japan__title-section'><h2>Japan</h2></div>
      <div className='japan__intro-section'>
        <div>
          <div className='section-title'>
            <span>the rising sun</span>
            <h2>Introduction</h2>
          </div>
          <div>
            <p>Japan is an island nation located in East Asia, renowned for its unique blend of ancient traditions and cutting-edge technology. Comprising four main islands and thousands of smaller ones, Japan is known for its beautiful landscapes, modern cities, rich cultural heritage, and high standards of living.</p>
            <p>As one of the world's leading economies and a global hub for innovation, Japan has become an increasingly popular destination for international students. The country offers high-quality education, advanced research facilities, and globally recognized qualifications across a wide range of disciplines. Students in Japan benefit from a safe environment, a rich cultural experience, and opportunities to develop valuable skills in one of the world's most technologically advanced nations.</p>
            <p>Whether pursuing higher education, language studies, or specialized training, international students can enjoy a rewarding academic journey while experiencing Japan's unique culture, hospitality, and way of life.</p>
          </div>
        </div>
        <div><img src={fuji} alt="mount fuji" /></div>
      </div>
      <div className='japan__reasons-section'>
        <div className='section-title'>
          <span>some reason</span>
          <h2>Why Japan?</h2>
        </div>
        <div>
          {
            jreasons.map((reason) => {
              return <FeatureCard sn={reason.id}
                f_title={reason.fname}
                f_detail={reason.description} />
            })
          }
        </div>
      </div>
      <div className='japan__courses-section'>
        <div className='section-title'>
          <span>the choices</span>
          <h2>Courses Offered</h2>
        </div>
        <div>
          <div>
            <p>Japan offers a diverse range of programs at language schools, vocational colleges, universities, and graduate institutions. Students can pursue studies in both English-taught and Japanese-taught programs depending on their academic goals and language proficiency.</p>
            <div>
              <h3>Popular Courses in Japan</h3>
              <ul>
                <li>Business and Management</li>
                <li>Accounting and Finance</li>
                <li>Software Engineering</li>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
                <li>Nursing</li>
                <li>Public Health</li>
                <li>Medicine</li>
                <li>Pharmacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Japan;