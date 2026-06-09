import React from 'react';
import '../styles/canada.css';
import canada from '../assets/images/canada.jpg';

const Canada = () => {
  return (
    <div className='canada'>
      <div className='canada__title-section'><h2>Canada</h2></div>
      <div className='canada__intro-section'>
        <div><img src={canada} alt="nigra fall" /></div>
        <div>
          <div className='section-title'>
            <span>the maple country</span>
            <h2>Introduction</h2>
          </div>
          <div>
            <p>Canada is the second-largest country in the world, stretching from the Atlantic Ocean in the east to the Pacific Ocean in the west and extending north to the Arctic Ocean. Known for its breathtaking natural landscapes, multicultural society, and high quality of life, Canada has become one of the most sought-after destinations for international students.</p>
            <p>Home to world-renowned universities and colleges, Canada offers high-quality education, innovative research opportunities, and career-focused programs across a wide range of disciplines. Students benefit from a safe and inclusive environment, globally recognized qualifications, and excellent opportunities for personal, academic, and professional growth.</p>
          </div>
        </div>
      </div>
      <div className='canada__reasons-section'>
        <div className='section-title'>
          <span>some reasons</span>
          <h2>why Choose Canada</h2>
        </div>
        <div>
          <div>
            <h3>High-Quality Education</h3>
            <p>Canada is home to globally recognized universities and colleges that offer internationally respected degrees, diplomas, and certificates.</p>
          </div>
          <div>
            <h3>Post-Graduation Work Opportunities</h3>
            <p>Canada offers pathways for international students to gain valuable work experience after graduation through post-study work permits, helping graduates build their careers in a global job market.</p>
          </div>
          <div>
            <h3>High Quality of Life</h3>
            <p>Students benefit from excellent healthcare, public services, clean cities, and a balance between academic and personal life.</p>
          </div>
          <div>
            <h3>Research and Innovation</h3>
            <p>Canadian universities invest heavily in research and innovation, providing students with access to modern facilities, laboratories, and industry collaborations.</p>
          </div>
          <div>
            <h3>High-Quality Education</h3>
            <p>Canada is home to globally recognized universities and colleges that offer internationally respected degrees, diplomas, and certificates.</p>
          </div>
        </div>
      </div>
      <div className='canada__courses-section'>
        <div className='section-title'>
          <span>the choices</span>
          <h2>Courses Offered</h2>
        </div>
        <div>
          <p>Canada offers a wide range of programs for international students at vocational, undergraduate, postgraduate, and research levels. Canadian institutions are known for combining academic excellence with practical, industry-focused learning, helping students develop the knowledge and skills required in today's global workforce.</p>
          <p>Whether you are interested in business, technology, healthcare, engineering, or the arts, Canadian universities and colleges provide diverse study options tailored to different career aspirations and academic backgrounds.</p>
        </div>
        <div>
          <h3>Pupular Courses Canada</h3>
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
  )
}

export default Canada;