import '../ratingcomponent/Rating.scss'


const Rating = (props) =>{
    const{img, paragraph1, name, title, starimg} = props


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