import './Section1.scss'
import page_image from '../assets/lois.jpeg'
import floating_imgae from '../assets/logo.svg'


const Section1 = () =>{

    return( 
        <>
        <section>
            <div  className="main_container">
            <div className="text_div">
                 <p> Become a</p>
               <p> Software Engineer.</p>
          
            </div>
            <div className="button_div">
            <button className='apply_button'><a href="">Apply now</a></button>
            <button className='learn_more'><a href="">Learn more</a></button>
            </div>
            <img className='image_girl' src={page_image} alt="an image of a girl" />

            <div className="flaoting_image">
                <img src={floating_imgae} alt="logo_image" />
            </div>
            </div>
            
        </section>
        
        </>
    )
}
export default Section1