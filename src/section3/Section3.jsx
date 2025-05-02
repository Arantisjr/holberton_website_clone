import '../section3/Section3.scss'
import Div_component from './Div_component/Div_component'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpeg'


const Section3 = () =>{


    return(
        <>
         <div className="s3upper_div">
                <p className='s3header'>
                Learn <span>software development</span> <br />
                ‍from the ground up
                </p>
                <p className='s3texts'>
                Our full-time, intensive program will first introduce you to the foundations of Computer Science, 
                then specialize in what drives you. Our collaborative, project-based environment makes every student 
                real-world ready after graduating.
                </p>
            </div>
        <div className="s3main_container"> 


            <Div_component
                head_img = {img1}
                paragraph1 = "Foundations of Computer Science and Machine Learning"
                paragraph2 ="Learn and explore the technologies behind modern-day breakthroughs in the fields of computer vision, 
                                natural language processing, recommender systems, autofocus driving and more. "
                some_text ="TensorFlow, Pandas, Keras, MongoDB, Numpy, Matplotlib, Algorithms, Data Structures"
            />

            <Div_component
                head_img = {img2}
                paragraph1 = "Foundations of Computer Science and Augmented Reality & Virtual Reality"
                paragraph2 ="Learn C# and develop interactive mixed-reality projects
                             in Unity3D, the world’s leading real-time game engine."
                some_text ="Unity3D, ARKit, C#, Unity AR Foundation, ARCore, ShaderGraph, Algorithms, Data Structures"
            />
            <Div_component
                head_img = {img1}
                paragraph1 = "Foundations of Computer Science and Full-Stack Web Development"
                paragraph2 ="Advance your skills in front-end, back-end and React development to create, maintain, 
                            and improve web applications and APIs."
                some_text ="Modern Javascript, React / Redux, Node.js, Redis, Data privacy, Data structures, Algorithms, MySQL / MongoDB"
            />
             <Div_component
                head_img = {img1}
                paragraph1 = "Foundations of Computer Science and Low Level & Algorithms"
                paragraph2 ="Dive into the C programming language, the Linux operating system, and uncover the mechanisms behind Blockchain technology by 
                                building your own cryptocurrency from scratch. "
                some_text ="C, Shell, Linux, Multithreading, Assembly, Sockets, Algorithms, Data, Data Structures"
            />
              <Div_component
                head_img = {img1}
                paragraph1 = "Foundations of Computer Science and Front-End Web Development"
                paragraph2 ="The work of front-end developers is what helps technology be usable to the average person, and companies with the best, most stable, and most usable 
                                sites are the most popular on the web. "
                some_text ="HTML/CSS, Redux, ES6, GraphQL, Responsive Design, Data Structures, React, Algorithms"
            />
            <Div_component
                head_img = {img1}
                paragraph1 = "Foundations of Computer Science and Back-End Web Development"
                paragraph2 ="Finding the perfect rental, sharing a photo from the cloud, and keeping data secure while using the web
                                 are all driven by back-end web developers."
                some_text ="MySQL, NodeJS, Redis, Authentication, Caching, GraphQL, i18n, Data Structures"
            />
            
        </div>
        <div className="s3scrolling_div">
            <div className="s3scroll">
                <button className='lessthan'>&lt;</button>
                <button className='greaterthan'>&gt;</button>

            </div>
        </div>
        </>
    )
}
export default Section3