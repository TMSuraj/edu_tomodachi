import React from 'react';
import opera from '../assets/images/opera.jpg';
import landscape from '../assets/images/landscape_aus.jpg';
import university from '../assets/images/university_aus.jpg';
import reasons from '../data/aus_reasons';
import '../styles/australia.css';
import ProcessCard from '../components/ProcessCard';

const Australia = () => {
    return (
        <div className='australia'>
            <div className='australia__title-section'><h2>Australia</h2></div>
            <div className='australia__intro-section'>
                <div><img src={opera} alt="opera house" /></div>
                <div>
                    <div className='section-title'>
                        <span>the vibrant country</span>
                        <h2>Introduction</h2>
                    </div>
                    <p>Australia, the world's sixth-largest country and the only nation
                        to occupy an entire continent, is located between the Indian and
                        Pacific Oceans in the Southern Hemisphere. Known for its diverse landscapes,
                        vibrant cities, and welcoming multicultural society, Australia is
                        also one of the world's most popular destinations for international students.</p>
                    <p>Home to globally recognized universities and institutions, Australia offers a
                        wide range of academic programs, innovative research opportunities, and
                        industry-focused learning experiences. With a high standard of living, a safe
                        environment, and excellent career prospects, Australia provides students with an
                        outstanding opportunity to achieve their educational and professional goals
                        while experiencing a unique and enriching lifestyle.</p>
                </div>
            </div>
            <div className='australia__reason-section'>
                <div className='section-title'>
                    <span>some reasons</span>
                    <h2>Why Australia?</h2>
                </div>
                <div>
                    {reasons.map((reason) => {
                        return <ProcessCard sn={reason.id}
                            title={reason.r_name}
                            detail={reason.detail} />
                    })}
                </div>
            </div>
            <div className='australia__courses-section'>
                <div className='section-title'>
                    <span>the choice</span>
                    <h2>Courses Offered</h2>
                </div>
                <div>
                    <div>
                        <p>Australia offers a wide range of programs for international students at vocational, undergraduate, postgraduate, and research levels. Australian institutions are known for combining academic excellence with practical, industry-focused learning, helping students develop the knowledge and skills required in today's global workforce.</p>
                    <p>Whether you are interested in business, technology, healthcare, engineering, or the arts, Australian universities and colleges provide diverse study options tailored to different career aspirations and academic backgrounds.</p>
                    </div>
                    <div>
                        <h3>Pupular Courses In Australia</h3>
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
                <div>
                    <h3>Study Levels</h3>
                    <div>
                        <h4>Vocational Education and Training (VET)</h4>
                        <p>Practical and career-oriented programs designed to develop industry-specific skills and improve employability.</p>
                    </div>
                    <div>
                        <h4>Bachelor's Degree</h4>
                        <p>Undergraduate programs typically completed in three to four years, providing comprehensive knowledge in a chosen field.</p>
                    </div>
                    <div>
                        <h4>Master's Degree</h4>
                        <p>Advanced study programs that allow students to specialize in a particular area and enhance their professional qualifications.</p>
                    </div>
                    <div>
                        <h4>Doctoral Degree (PhD)</h4>
                        <p>Research-focused programs for students seeking expertise and careers in academia, research, or specialized industries.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Australia;