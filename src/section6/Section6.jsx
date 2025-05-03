import '../section6/Section6.scss'
import cisco from '../assets/Cisco.jpeg'
import rappi from '../assets/rappi.png'
import loock from '../assets/lockheed.png'
import linked from '../assets/linkedin.jpeg'
import nvidia from '../assets/nev.jpeg'
import dropbox from '../assets/drop_box.jpeg'
import apple from '../assets/apple.jpeg'
import gentech from '../assets/gentech.jpeg'
import facebook from '../assets/facebook.jpeg'
import quora from '../assets/qoura.png'
import docker from '../assets/docker.jpeg'
import change from '../assets/change.jpeg'
import ibm from '../assets/ibm.jpeg'
import tesla from '../assets/tesla.jpeg'
import google from '../assets/google.jpeg'
import credit from '../assets/credit.jpeg'
import pintrest from '../assets/pintrest.jpeg'
import creditjusto from '../assets/credijusto.png'
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
                <img src={rappi} alt="industry" />
                <img src={loock} alt="industry" />
                <img src={linked} alt="industry" />
                <img src={nvidia} alt="industry" />
                <img src={dropbox} alt="industry" />
                <img src={apple} alt="industry" />
                <img src={gentech} alt="industry" />
                <img src={facebook} alt="industry" />
                <img src={quora} alt="industry" />
                <img src={docker} alt="industry" />
                <img src={change} alt="industry" />
                <img src={ibm} alt="industry" />
                <img src={tesla} alt="industry" />
                <img src={google} alt="industry" />
                <img src={credit} alt="industry" />
                <img src={pintrest} alt="industry" />
                <img src={cisco} alt="industry" />
                <img src={creditjusto} alt="industry" />
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