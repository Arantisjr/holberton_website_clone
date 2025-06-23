import '../section3/Section3.scss'
import Div_component from './Div_component/Div_component'
import { courses } from '../assets/assets'
import { useRef } from 'react'

const Section3 = () => {
    const scrollRef = useRef(null);

    const scrollAmount = 500; // Adjust this value for how much to scroll per click

    const handleLeftScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const handleRightScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <> 
            <div className="s3upper_div">
                <p className='s3header'>
                    Learn <span>software development</span> <br />
                    ‍from the ground up
                </p>
                <p className='s3texts'>
                    Our full-time, intensive program will first introduce you to the foundations of Computer Science, 
                    then specialize in what drives you. Our collaborative, project-based environment makes every student 
                    real-world ready after graduating.
                </p>
            </div>
            <div className="s3carousel_wrapper">
                <div className="s3main_container" ref={scrollRef}>
                    {courses.map((course) => (
                        <Div_component key={course.id} {...course} />
                    ))}
                </div>
                <div className="s3main_mainbuttons">

                <button className='lessthan' onClick={handleLeftScroll}>&lt;</button>
                <button className='greaterthan' onClick={handleRightScroll}>&gt;</button>
                </div>
            </div>
        </>
    )
}
export default Section3