import '../section7/Section7.scss'
import Rating from './ratingcomponent/Rating'
import { Entities } from './entiities'


const Section7 = () =>{


    return(
        <>
        <div className="s7flex_container">
        {
          Entities.map((entity)=>{
            
            return(<Rating key={entity.id} {...entity} />)
          })  
        }
        </div>
        <div className="s7scrolling_div">
            <div className="s7scroll">
                <button className='s7lessthan'>&lt;</button>
                <button className='s7greaterthan'>&gt;</button>

            </div>
            </div>

        </>
    )
}
export default Section7