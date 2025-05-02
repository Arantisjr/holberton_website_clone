import '../section3/Section3.scss'
import Div_component from './Div_component/Div_component'
import { courses } from '../assets/assets'






const Section3 = () =>{


    return(
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
        <div className="s3main_container"> 
            {
                courses.map((course)=>{
                   return <Div_component key={course.id} {...course} />
                })
            }

        <div className="s3scrolling_div">
            <div className="s3scroll">
                <button className='lessthan'>&lt;</button>
                <button className='greaterthan'>&gt;</button>

            </div>
        </div>
            
        </div>
     
        </>
    )
}
export default Section3