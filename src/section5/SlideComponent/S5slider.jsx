import React from 'react'
import './s5slider.scss'

const S5slider = (props) => {
  const { img, name, school, some_text, onPrev, onNext } = props;
  return (
   <>
   <div className="mains5_leftdiv">

       <div className="s5left_div">
        <div className="aman_div">

           <img src={img} alt="a man" />
        </div>
                <div className="s5description_div">
                    <p className='s5name'>{name}</p>
                    <p className='s5school'>{school}</p>
                    <div className="s5text-div">
                  <span>{name}</span> {some_text}
                    </div>
                </div> 

                <button className='s5keepreading'> Keep reading</button>
            </div>
            <div className="s5button_div">
                <button className='s5left_nav_btn' onClick={onPrev}>&lt;</button>
                <button className='s5right_nav_btn' onClick={onNext}>&gt;</button>
            </div>
   </div>
   </>
  )
}

export default S5slider