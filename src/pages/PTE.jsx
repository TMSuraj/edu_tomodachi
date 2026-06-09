import React from 'react';
import '../styles/pte.css';
const PTE = () => {
  return (
    <div className='pte'>
      <div className='pte__title-section'><h2>PTE</h2></div>
      <div className='pte__intro-section'>
        <div className='section-title'>
          <span>getting started</span>
          <h2>Introduction</h2>
        </div>
        <div>
          <p> PTE (Pearson Test of English Academic) is a computer-based English language
            proficiency test designed for non-native English speakers. It is accepted by
            thousands of universities, colleges, professional organizations, and government
            agencies worldwide, including those in Australia, New Zealand, Canada, the United
            Kingdom, and the United States.</p>
          <p>PTE assesses a candidate's ability to use English in academic and real-life
            situations through an integrated approach to testing speaking, writing, reading,
            and listening skills.</p>
          <div>
            <h3>PTE vs IELTS</h3>
            <p>While both PTE and IELTS assess English language proficiency and are widely accepted for study,
              work, and migration purposes, there are some key differences:</p>
            <ul>
              <li>Test Format: PTE is fully computer-based, whereas IELTS offers both paper-based and computer-based options.</li>
              <li>Speaking Test: In PTE, speaking responses are recorded and scored by AI. In IELTS, speaking is conducted face-to-face with an examiner.</li>
              <li>Scoring: PTE uses an automated scoring system, while IELTS combines examiner and standardized assessment methods.</li>
              <li>Results: PTE results are typically available within 48 hours, whereas IELTS results usually take several days.</li>
              <li>Question Types: PTE uses integrated tasks that assess multiple skills at once, while IELTS evaluates each skill separately.</li>
            </ul>
          </div>
          <div>
            <h3>Benefits of PTE</h3>
            <ul>
              <li>PTE for Study: PTE scores are accepted by thousands of educational institutions worldwide and can be used for admission to undergraduate, postgraduate, and professional programs.</li>
              <li>PTE for Work: Many employers and professional bodies recognize PTE as proof of English language proficiency, helping candidates enhance their career opportunities.</li>
              <li>PTE for Immigration: PTE scores are accepted for visa and migration applications by several countries, including Australia, New Zealand, and the United Kingdom.</li>
              <li>Fast and Fair Assessment: PTE uses AI-based scoring, ensuring consistency and impartiality while delivering results quickly, often within two days.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pte__format-section'>
        <div className='section-title'>
          <span>the format</span>
          <h2>PTE Test Structure </h2>
        </div>
        <div>
          <div>
            <h3>Speaking & Writing</h3>
            <p>This combined section assesses your ability to communicate effectively in spoken and written English. Tasks include:</p>
            <ul>
              <li>Personal Introduction</li>
              <li>Read Aloud</li>
              <li>Repeat Sentence</li>
              <li>Describe Image</li>
              <li>Re-tell Lecture</li>
              <li>Answer Short Question</li>
              <li>Summarize Written Text</li>
              <li>Essay Writing</li>
            </ul>
          </div>
          <div>
            <h3>Reading</h3>
            <p>The Reading section evaluates your ability to understand written English in academic contexts. Tasks include:</p>
            <ul>
              <li>Multiple Choice Questions</li>
              <li>Re-order Paragraphs</li>
              <li>Reading Fill in the Blanks</li>
            </ul>
          </div>
          <div>
            <h3>Listening</h3>
            <p>The Listening section measures your ability to understand spoken English in different situations. Tasks include:</p>
            <ul>
              <li>Summarize Spoken Text</li>
              <li>Multiple Choice Questions</li>
              <li>Fill in the Blanks</li>
              <li>Highlight Correct Summary</li>
              <li>Select Missing Word</li>
              <li>Write from Dictation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PTE;