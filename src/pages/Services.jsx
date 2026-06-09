import React from 'react';
import '../styles/services.css';

const Services = () => {
  return (
    <div className='services'>
      <div className='services__title-section'><h2>Services</h2></div>
      <div className='services__counselling-section'>
        <div className='section-title'>
          <span>goal oriented</span>
          <h2>Career Counselling</h2>
        </div>
        <p>Choosing the right academic and career path can be challenging in today's rapidly
          changing world. At Tomodachi Educational Foundation, our career counselling service
          helps students identify their strengths, interests, and long-term goals to make informed
          decisions about their future. Our experienced counsellors provide personalized guidance
          on course selection, study destinations, career opportunities, and skill development,
          ensuring that each student takes a confident step toward success.</p>
        <p>
          Whether you are planning to study abroad, selecting a university program, or exploring
          career options, we are committed to helping you find the pathway that best matches
          your aspirations.</p>
        <div>
          <h3>What We Offer</h3>
          <ul>
            <li>Personalized one-on-one counselling sessions</li>
            <li>Career interest and goal assessment</li>
            <li>Academic course and program selection guidance</li>
            <li>Study destination recommendations</li>
            <li>University and college selection support</li>
            <li>Information on career opportunities and industry trends</li>
            <li>Scholarship and financial planning advice</li>
            <li>Application and admission guidance</li>
            <li>Future career pathway planning</li>
            <li>Ongoing support throughout your educational journey</li>
          </ul>
        </div>
      </div>
      <div className='services__preparation-section'>
        <div className='section-title'>
          <span>fruitful & productive</span>
          <h2>Preparation Classes</h2>
        </div>
        <p>At Tomodachi Educational Foundation, we offer comprehensive preparation classes
          designed to help students achieve the language proficiency and test scores required
          for international education opportunities. Our experienced instructors provide structured
          lessons, practical exercises, and personalized support to build confidence and improve
          performance in recognized language examinations.</p>
        <p>Whether you are planning to study in an English-speaking country or pursue opportunities
          in Japan, our preparation programs equip you with the skills needed for academic and
          professional success.</p>
        <div> <h3>Reasons for enrollment</h3>
          <ul>
            <li>Experienced and qualified instructors</li>
            <li>Interactive classroom learning</li>
            <li>Practice tests and mock examinations</li>
            <li>Individual progress monitoring</li>
            <li>Flexible learning environment</li>
            <li>Exam strategies and time-management techniques</li>
            <li>Guidance for achieving target scores</li>
          </ul></div>
      </div>
      <div className='services__processing-section'>
        <div className='section-title'>
          <span>hassel free</span>
          <h2>Documentation and Visa Processing</h2>
        </div>
        <p>Navigating visa requirements and documentation can be a complex process.
          At Tomodachi Educational Foundation, we provide professional assistance to
          ensure that your application is accurate, complete, and submitted on time.
          Our team guides students through every stage of the visa process, helping reduce
          stress and improve application readiness.</p>
        <p>From preparing essential documents to reviewing visa applications, we at Tomodachi are committed
          to making your journey abroad as smooth and hassle-free as possible.</p>
        <div>  <h3>Our Services Include</h3>
          <ul>
            <li>Visa application guidance and support</li>
            <li>Document preparation and verification</li>
            <li>Statement of Purpose (SOP) assistance</li>
            <li>Application form review</li>
            <li>Financial document guidance</li>
            <li>Interview preparation and counselling</li>
            <li>Compliance with country-specific requirements</li>
            <li>Submission and follow-up support</li>
            <li>Pre-departure guidance</li>
            <li>Personalized assistance throughout the process</li>
          </ul></div>
      </div>
    </div>
  )
}

export default Services;