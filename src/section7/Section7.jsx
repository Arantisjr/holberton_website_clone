import '../section7/Section7.scss'
import Rating from './ratingcomponent/Rating'
import { Entities } from './entiities'
import { useState } from 'react'
 
const Section7 = () =>{

    const [currentSlide, setCurrentSlide] = useState(0);

    // Show 2 slides at a time
    const total = Entities.length;

    const handleLeftScroll = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 2 + total) % total);
    };

    const handleRightScroll = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 2) % total);
    };

    // Get the indices for the two slides to show
    const firstIndex = currentSlide;
    const secondIndex = (currentSlide + 1) % total;

    return(
        <>
        <div className="s7flex_container">
          <Rating
            key={Entities[firstIndex].id}
            {...Entities[firstIndex]}
            className="active"
          />
          <Rating
            key={Entities[secondIndex].id}
            {...Entities[secondIndex]}
            className="active"
          />
        </div>
        <div className="s7scrolling_div">
            <div className="s7scroll">
                <button className='s7lessthan' onClick={handleLeftScroll}>&lt;</button>
                <button className='s7greaterthan' onClick={handleRightScroll}>&gt;</button>
            </div>
        </div>
        </>
    )
}
export default Section7