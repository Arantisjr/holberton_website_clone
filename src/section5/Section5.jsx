import '../section5/Section5.scss'
import { useEffect, useState } from 'react';
import S5slider from './SlideComponent/S5slider';
import { SliderContent } from './section5';

const Section5 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.s5left_div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? SliderContent.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === SliderContent.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="s5main_container">
        <S5slider
          {...SliderContent[current]}
          onPrev={handlePrev}
          onNext={handleNext}
        />
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