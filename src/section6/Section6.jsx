import '../section6/Section6.scss'
import cisco from '../assets/Cisco.jpeg'
import videoimg from '../assets/videoimg.jpg'



const Section6 = () =>{

    return(
        <>
        <div className="s6main_container">
            <div className="s6text_div">
                <p className='s6header'>
                Amazing companies  hire<span> our <br /> students</span>
                </p>
                <p className='s6some_text'>
                Our students have landed software engineering employment across all 
                industries and company sizes. See some of the employers who have hired our students.
                </p>
            </div>
            <div className="s6industries">
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={cisco} alt="industry" />
            </div>
        </div>
        <div className="s6img_div">
                <img className='s6image' src={videoimg} alt="3 students" />

                <div className="s6play_button">
                   <a href="#"> <button className='play_button'>&#9654;</button></a>
                </div>


            </div>
        </>
    )
}
export default Section6