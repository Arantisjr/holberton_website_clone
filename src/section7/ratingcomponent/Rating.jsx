import '../ratingcomponent/Rating.scss'
import { useEffect } from 'react';


const Rating = (props) =>{
    const{img, paragraph1, name, title, starimg} = props;

      useEffect(() => {
                        const hiddenElements = document.querySelectorAll('.s7main_container');
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
        
        <div className="s7main_container">
            <div className='s7img'>
                <img className='a_person' src={img} alt="a person" />
            </div>
            <div className="s7text_div">
                <img className='s7star_img' src={starimg} alt="ratings" />
                <p className='s7paragraph1'>{paragraph1}</p>
                <p className='s7name'>{name}</p>
                <p className='s7title'>{title}</p>
            </div>
            
        </div>
        
        </>
    )
}
export default Rating