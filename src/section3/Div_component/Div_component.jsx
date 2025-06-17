import '../Div_component/Div_component.scss'
import laptop_img from '../images/laptop.svg'
import React, { useEffect } from 'react'

const Div_component = (props) =>{
    const{head_img, paragraph1, paragraph2, some_text, } = props; 

      useEffect(() => {
        const hiddenElements = document.querySelectorAll('.image_div');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
              
              entry.target.classList.add('show');
            } else {
              // entry.target.classList.remove('show');
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
        <div  className= 'image_div'>
            <img src={head_img} alt="header image" className='header_img' />
            <div className="s3text_div">
                <p className='text1'>{paragraph1}</p>
                <p className='text2'>{paragraph2}</p>
            </div>
            <div className="pl_div">
              <div className="laptop_icon"> <img src={laptop_img} alt="laptop icon" /></div> 
                <p className='pl_lang'>{some_text}</p>
            </div>

            <div className="footer_buttons"> 
                <button className='buton_more'>
                    Learn more
                </button>
                <button className='campus'>
                    Find a campus
                </button>
            </div>
        </div> 
        </>
    )
}
export default Div_component 