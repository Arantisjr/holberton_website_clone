import '../section5/Section5.scss'
import  brucele from '../assets/brucelee.jpeg'


const Section5 = () =>{

    return(
        <>
        <div className="s5main_container">
            <div className="s5left_div">
                <img src={brucele} alt="a man" />
                <div className="s5description_div">
                    <p className='s5name'>Sergio Rueda</p>
                    <p className='s5school'>Holberton School Colombia</p>
                    <div className="s5text-div">
                  <span> Sergio Rueda </span> is a breakdancer turned software engineer for the machine 
                    learning division of Mercado Libre, Latin America’s $50B e-commerce 
                    and auction site. Getting there was not easy...
                    </div>
                </div> 

                <button className='s5keepreading'> Keep reading</button>
               

            </div>
           
            <div className="s5right_div">
                <p className='s5meet'> MEET OUR STUDENTS</p>
                <p className='s5community'>A community of innovators,
                doers, and dreamers.
                </p>
                <p className='s5text1'>Coming from all walks of life, our students have
                     something in common: they decided to learn to code to become autonomous
                      and use their new skills to pursue their dreams.
                      </p>
                <p className='s5text2'>
                Read stories from our alumni about how Holberton School helped 
                them jumpstart new careers in technology, and get ready to
                 re-<span>Define Your Future </span> too!
                </p>

            </div>
        </div>
        </>
    )
}
export default Section5