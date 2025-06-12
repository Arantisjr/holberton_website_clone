import '../section3/Section3.scss'
import Div_component from './Div_component/Div_component'
import { courses } from '../assets/assets'
import { useState } from 'react'


 



const Section3 = () =>{
    const[currentslide, setcurrentSlide] =  useState([0,1,2])

    const handleLeftScroll = () =>{
         setcurrentSlide( () => {
           const  newArray = [...currentslide];
            const firstvalue = newArray[0] === 0 ? courses.length - 1  : newArray[0] - 1;
            newArray.pop()
            newArray.unshift(firstvalue);
            return newArray
    })
    }

    const handleRightScroll = () =>{
        setcurrentSlide( () => {
            const newArray = [...currentslide];
            const   lastValue = newArray[2] === courses.length - 1 ? 0 : newArray[2] + 1 ;
            newArray.shift();
            newArray.push(lastValue);
            return newArray;
        
    })

    }
 

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
                courses.map((course, index)=>{
                   return(
        
                        <Div_component key={course.id} styling={ currentslide.includes(index) ? 's3main_scroll' : 's3main_dscroll'} {...course} />
                   ) 
                })
            }

        <div className="s3scrolling_div">
            <div className="s3scroll">
                <button className='lessthan' onClick={handleLeftScroll}>&lt;</button>
                <button className='greaterthan' onClick={handleRightScroll}>&gt;</button>
            </div>
        </div>
            
        </div>
     
        </>
    )
}
export default Section3