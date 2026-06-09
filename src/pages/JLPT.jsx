import React from 'react';
import '../styles/jlpt.css';

const JLPT = () => {
  return (
    <div className='jlpt'>
      <div className='jlpt__title-section'><h2>JLPT</h2></div>
      <div className='jlpt__intro-section'>
        <div className='section-title'>
          <span>getting started</span>
          <h2>Introduction</h2>
        </div>
        <div>
          <p>Started in 1984 under the joint supervision of the Japan Foundation and Japan Educational 
            Exchanges and Services (JEES), the Japanese Language Proficiency Test (JLPT) is an 
            internationally recognized examination used to measure and certify the Japanese-language 
            proficiency of individuals whose native language is not Japanese.</p>
            <div>
              <h3>Advantages of JLPT</h3>
              <ul>
                <li>Used in Japan’s immigration procedures</li>
                <li>One of requirements to take Japan's national exams for medical practitioners</li>
                <li>One of requirements to take Japan's prefectural exams for assistant nurses</li>
                <li>A test subject is waived on accreditation exam for completion of junior high school level education in Japan</li>
                <li>One of requirements for the nurse/caregiver candidates under the Economic Partnership Agreement (EPA)</li>
              </ul>
            </div>
        </div>
      </div>
      <div className='jlpt__features-section'>
        <div className='section-title'>
          <span>the features</span>
          <h2>Four Characteristics of JLPT</h2>
        </div>
        <div>
          <div>
            <h3>Measure communicative competence required to perform tasks</h3> 
        <p>Rather than focusing solely on Japanese-language vocabulary and grammar, the JLPT emphasizes the practical use of language in real-life communication and everyday situations. The test measures comprehensive Japanese-language proficiency through three components: Language Knowledge, Reading, and Listening.</p>
          </div>
          <div>
            <h3>Select a suitable level from among five levels</h3>
            <p>The JLPT is offered in five levels (N1, N2, N3, N4, N5). N4 and N5 measure understanding of basic Japanese that is mainly learned in the classroom. N1 and N2 measure understanding of Japanese used in a broad range of actual everyday scenes. N3 bridges the gap between N4/N5 and N1/N2.</p>
          </div>
          <div>
            <h3>More accurately measures Japanese-language proficiency with scaled scores</h3>
            <p>Because the difficulty of the JLPT may vary slightly from one test session to another, the exam uses a scaled scoring system instead of raw scores based solely on the number of correct answers. This method ensures that results are measured consistently across different test dates, providing a more accurate and fair assessment of a candidate's Japanese-language proficiency.</p>
          </div>
          <div>
            <h3>"JLPT Can-do Self-Evaluation List" is offered</h3>
            <p>Test scores and pass/fail results do not fully reflect how effectively a learner can use Japanese in real-life situations. To provide a clearer understanding of practical language ability, the JLPT offers the "JLPT Can-do Self-Evaluation List" as a guide for interpreting test results.</p>
          </div>
        </div>
      </div>
      <div className='jlpt__competence-section'>
        <div className='section-title'>
          <span>the requirement</span>
          <h2>N1-N5: Linguistic Competence</h2>
        </div>
       <div>
         <div>
           <h3>Level N1</h3>
           <p>This level requires the ability to understand Japanese used in a variety of circumstances.</p>
           <table>
            <tr><th>Reading</th><th>Listening</th></tr>
            <tr>
              <td>Able to read and understand complex, abstract, and advanced Japanese texts on a wide range of topics, including their structure, content, and the writer's intent.</td>
            <td>Able to understand conversations, news reports, and lectures delivered at natural speed, while accurately grasping key ideas, details, logical relationships, and essential points.</td>
            </tr>
           </table>
        </div>
         <div>
           <h3>Level N2</h3>
           <p>The ability to understand Japanese used in everyday situations, and in a variety of circumstances to a certain degree.</p>
           <table>
            <tr><th>Reading</th><th>Listening</th></tr>
            <tr>
              <td>Able to read and understand clearly written Japanese texts on a variety of topics, including articles, commentaries, and general-interest materials, while grasping key ideas, narratives, and the writer's intent.</td>
            <td>Able to understand conversations and news reports spoken at near-natural speed in everyday and diverse situations, while grasping key ideas, important details, and relationships between speakers.</td>
            </tr>
           </table>
        </div>
         <div>
           <h3>Level N3</h3>
           <p>The ability to understand Japanese used in everyday situations to a certain degree.</p>
           <table>
            <tr><th>Reading</th><th>Listening</th></tr>
            <tr>
              <td>Can read and understand everyday Japanese texts, identify key information, and grasp the main points of moderately challenging written materials.</td>
            <td>Can understand everyday conversations spoken at near-natural speed and generally follow the main content and relationships between speakers.</td>
            </tr>
           </table>
        </div>
         <div>
           <h3>Level N4</h3>
           <p>The ability to understand basic Japanese.</p>
           <table>
            <tr><th>Reading</th><th>Listening</th></tr>
            <tr>
              <td>Can read and understand simple Japanese texts on familiar everyday topics using basic vocabulary and kanji.</td>
            <td>Can understand everyday conversations when spoken slowly and follow their general meaning.</td>
            </tr>
           </table>
        </div>
         <div>
           <h3>Level N5</h3>
           <p>This level requires the ability to understand Japanese used in a variety of circumstances.</p>
           <table>
            <tr><th>Reading</th><th>Listening</th></tr>
            <tr>
            <td>The ability to understand some basic Japanese.</td>
            <td>Can understand simple conversations on familiar topics and identify key information when spoken slowly.</td>
            </tr>
           </table>
        </div>
       </div>
      </div>
    </div>
  )
}

export default JLPT;