import '../footer/Footer.scss'
import hoberton from '../assets/hoberton.png'


const Footer = () =>{
    const currentYear = new Date().getFullYear();


    return(

        <>

        <div className="s4red_div">
                <p className='s4ready'> Ready to define your future?</p>
                <button className='started'>Get Started!</button>
        
                </div>
        <div className="fmain_container">
           <div className="fsocial">
          <img src={hoberton} alt="logo" />
            <div className="fsociallinks">
                <ul>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li>dhhd</li>
                    <li>djjd</li>
                    <li>djdkk</li>
                </ul>
            </div>
           </div>
           < hr className='fbreakline'/>
           <div className="fdownlinks">
            <div className="ffirstlinks">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Programs</a></li>
                    <li><a href="#">Methodology</a></li>
                </ul>
            </div>
            <div className="ffirstlinks">
            <ul>
                    <li><a href="#">Campuses</a></li>
                    <li><a href="#">Application</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                </ul>

            </div>
            <div className="ffirstlinks">
            <ul>
                    <li><a href="#">Open a School</a></li>
                    <li><a href="#">Hire our Students</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Holberton, Inc</a></li>
                </ul>

            </div>
           </div>
           < hr className='fbreakline'/>
           <div className="ffooter">
            <p>
                &copy; {currentYear} HS HQ All rights reserved.
            </p>
            <div className="fotherlinks">
                <ul>
                <li><a href="#">Terms of Use </a></li>
                <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
           </div>
        </div>
        
        </>
    )
}
export default Footer