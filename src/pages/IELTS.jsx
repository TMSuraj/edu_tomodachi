import React from 'react';
import '../styles/ielts.css';

const IELTS = () => {
    return (
        <div className='ielts'>
            <div className='ielts__title-section'><h2>IELTS</h2></div>
            <div className='ielts__intro-section'>
                <div className='section-title'>
                    <span>getting started</span>
                    <h2>Introduction</h2>
                </div>
                <div>
                    <div>
                        <h3>What is IELTS?</h3>
                        <p>
                            IELTS (International English Language Testing System) is a world-renowned
                            and widely accepted English language proficiency test for non-native English
                            speakers. It was developed and is jointly managed by the British Council,
                            IDP Education, and Cambridge Assessment English.
                        </p>
                    </div>
                    <div>
                        <h3>Benefits of IELTS</h3>
                        <ul>
                            <li>IELTS for Work: An IELTS certification can improve your employment
                                prospects in English-speaking countries and in organizations where
                                English is the primary language of communication.</li>
                            <li>IELTS for Study: Many leading universities, colleges, and educational
                                institutions in English-speaking countries require IELTS scores as part
                                of their admission process.</li>
                            <li>IELTS for Immigration: Immigration and visa authorities in countries
                                such as Australia, New Zealand, Canada, the United Kingdom, and the
                                United States use IELTS scores to assess an individual's English
                                language proficiency.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='ielts__types-section'>
                <div className='section-title'>
                    <span>the variants</span>
                    <h2>Types of IELTS</h2>
                </div>
                <div>
                    <p>Depending on your purpose, there are two types of IELTS tests: IELST for Academic and
                        IELTS for General Training</p>
                    <h3>IELTS for Academic</h3>
                    <p>The IELTS Academic test is designed to assess your English language proficiency in an
                        academic setting. It evaluates whether your language skills are sufficient for studying
                        or training in an English-speaking environment and reflects the language commonly used in
                        higher education.</p>
                    <p>Choose IELTS Academic if you want to:</p>
                    <ul>
                        <li>Study at an undergraduate or postgraduate level in an English-speaking country.</li>
                        <li>Apply for a Student Route visa to study at a UK university that is a licensed Student Route Sponsor. </li>
                        <li>Work in a professional organization where English proficiency is required. </li>
                    </ul>
                    <h3>IELTS General TrainingIELTS General Training</h3>
                    <p>The IELTS General Training test is designed to assess your English language proficiency in practical,
                        everyday situations. It focuses on the language skills needed for social, workplace,
                        and general living environments.</p>
                    <p>Choose IELTS General Training if you want to:</p>
                    <ul>
                        <li>Study or train below degree level. </li>
                        <li>Work or undertake job-related training in an English-speaking country. </li>
                        <li>Migrate to an English-speaking country. </li>
                        <li>Apply for employment opportunities that require recognized English language proficiency.</li>
                    </ul>
                </div>
            </div>
            <div className='ielts__format-section'>
                <div className='section-title'>
                    <span> the structure</span>
                    <h2>IELTS Test Format</h2>
                </div>
                <div>
                    <p>The IELTS test consists of four sections: Listening, Reading, Writing, and Speaking. The Listening, Reading, and Writing sections are completed on the same
                        day without any breaks between them. The Speaking test may be conducted
                        on the same day as the other sections or within seven days before or after
                        the test date, depending on local test center arrangements.
                    </p>
                    <div>
                        <h3>Listening</h3>
                        <p>The IELTS Listening test is designed to assess a wide range of listening skills, including your ability to:</p>
                        <ul>
                            <li>Understand main ideas and specific factual information.</li>
                            <li>Recognize a speaker's opinions, attitudes, and purpose.</li>
                            <li>Follow the development of ideas and arguments.</li>
                        </ul>
                    </div>
                     <div>
                    <h3>Reading</h3>
                    <p>The IELTS Reading test evaluates your ability to read, understand, and analyze written English effectively. It assesses how well you can:</p>
                    <ul>
                        <li>Identify main ideas and key information.</li>
                        <li>Understand details, inferences, and implied meanings.</li>
                        <li>Recognize a writer's opinions, attitudes, and purpose.</li>
                        <li>Follow the development of ideas and arguments.</li>
                    </ul>
                </div>
                <div>
                    <h3>Writing</h3>
                    <p>The IELTS Writing test is designed to assess a wide range of writing skills, including how well you:</p>
                    <ul>
                        <li>write a response appropriately</li>
                        <li>organise ideas</li>
                        <li>use a range of vocabulary and grammar accurately.</li>
                    </ul>
                </div>
                <div>
                    <h3>Speaking</h3>
                    <p>The IELTS Speaking test assesses your ability to communicate effectively in English through a face-to-face interview with a certified examiner. The test is the same for both IELTS Academic and IELTS General Training. The examiner will evaluate how well you can:</p>
                    <ul>
                        <li>Communicate ideas, opinions, and information clearly.</li>
                        <li>Speak fluently on a given topic.</li>
                        <li>Speak fluently on a given topic.</li>
                        <li>Organize and develop your ideas.</li>
                        <li>Express and justify your views.</li>
                        <li>Discuss and analyze a range of topics.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default IELTS;