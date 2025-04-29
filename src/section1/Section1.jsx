import './Section1.scss'
import page_image from '../assets/lois.jpeg'


const Section1 = () =>{

    return(
        <>
        <section>
            <div className="text_div">
                <h1>Become a <br />
                Software Engineer.
                </h1>
            </div>
            <div className="button_div">
            <button className='apply_button'><a href="">Apply now</a></button>
            <button className='learn_more'><a href="">Learn more</a></button>
            </div>
            <img src={page_image} alt="an image of a girl" />
        </section>
        
        </>
    )
}
export default Section1