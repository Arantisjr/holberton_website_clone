import '../section4/Section4.scss'
import fat9 from '../assets/fat9.jpg'
import ceo from '../assets/ceo.jpg'
import React, { useEffect } from 'react'


const Section4 = () =>{ 

       useEffect(() => {
            const hiddenElements = document.querySelectorAll('.s4picture_div, .s4image1');
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                  
                  entry.target.classList.add('show');
                } else {
                  entry.target.classList.remove('show');
                }
              });
            });      
        
            hiddenElements.forEach((el) => observer.observe(el));
        
            return () => {
              hiddenElements.forEach((el) => observer.unobserve(el));
            };
          }, []);


    return(
        <>
        <p className='s4sometext'>
        Not available at every campus. Check your preferred campus for program availability.
        </p>
        <div className="s4red_div">
            <p className='s4ready'> Ready to define your future?</p>
            <button className='started'>Get Started!</button>
        </div>
        <div className="s4school_div">
                <div className="s4picture_div">
                    <img className='s4image1' src={fat9} alt="a person" />
                </div>
                <div className="s4picture_text">
                    <p className='s4head_text'>
                    LEARNING BY DOING
                    </p>
                    <h1 className='s4h2'>The Holberton School  Way</h1>
                    <p className='s4paragraph1'>
                    Project- based learning is a proven alternative learning methodology to
                    the traditional teacher-led lecture and educational memorization method. 
                    </p>
                    <p className='s4paragraph2'>
                    Rather than teaching a lot of theory and having you occasionally apply a fraction of your knowledge on a class project, we do the opposite.
                    We give you increasingly difficult programming challenges to solve with minimal initial directions on how to solve them
                    </p>
                    <p className='s4paragraph3'>
                        Through learning by doing and learning how to rapidly adopt new skills and methodologies, you are better 
                        prepared to succeed in this ever evolving industry.You are trained,
                    challenged, and tested on today's technologies, but the learning 
                            skills you develop here will prepare you to adapt to and learn the technologies and the coding languages of tomorrow
                    </p>
                </div>

        </div>
 
        <div className="s4school_div">
             <div className="s4picture_text">
                    <p className='s4head_text'>
                    FLEXIBLE TUITION OPTIONS
                    </p>
                    <h1 className='s4h2'>We succeed when you succeed</h1>
                    <p className='s4paragraph1'>
                    We don’t think that financial capacity should be a barrier.
                     That's why you will be given flexible options to finance your tuition.
                    </p>
                    <p className='s4paragraph2'>
                    When Holberton School students succeed, everyone succeeds. 
                    </p>
                    <p className='s4paragraph3'>
                                            
                            Holberton School offers flexible tuition options that allow you to focus on school, not tuition. To top it all off, 
                            some of our campuses offer living stipends and 
                            scholarships to help you cover the cost of living while you attend school full-time.
                    </p>
                    {/* <button className='bg-red-500 text-2xl text-red-500'>Find a Campus</button> */}
                    <button className='s4findcampus'>Find a Campus</button>

                </div>
                <div className="s4picture_div">
                    <img className='s4image1' src={ceo} alt="a person" />
                </div>

        </div>
        


        </>
    )
}
export default Section4