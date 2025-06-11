import React, { useState } from "react";

import "../section2/Section2.scss";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";

const Section2 = () => {
  // Store the index of the open dropdown, or null if none is open
  const [openIndex, setOpenIndex] = useState(null);

  // Data for each dropdown
  const dropdowns = [
    {
      icon: icon1,
      title: "For Learners",
      content: (
        <>
          <p>
            Only motivation and talent is needed to learn Computer Science from
            the ground up!
          </p>
          <p>
            Our students collaborate on projects and learn from each other.
            Regardless of your previous education, age, or gender, you'll learn
            skills that employers value and reward in Software Development
            Careers.
          </p>
        </>
      ),
    },
    {
      icon: icon2,
      title: "For career switchers",
      content: (
        <>
          <p>
            No matter in which sector you were working in; Computer Science
            might be the right path for you!
          </p>
          <p>
            With our non-traditional methodology, you'll learn the skills of the
            future that will help you get a well-paid job in the fastest growing
            industry.
          </p>
        </>
      ),
    },
    {
      icon: icon3,
      title: "For parents",
      content: (
        <>
          <p>
            Software Engineer is a promising job, but it's normal to wonder if
            it is the right path for your kid. Well, encourage them to complete
            our Application Process!
          </p>
          <p>
            It is the perfect example of what and how students will learn at
            Holberton School. Probably the best way to determine whether they
            like programming or not and if our methodology suits them best.
          </p>
        </>
      ),
    },
    {
      icon: icon4,
      title: "For businesses",
      content: (
        <>
          <p>
            Holberton School offers a scalable, first-rate education model built
            by Silicon Valley experts with a sustainable financial model.
          </p>
          <p>
            Our students have landed jobs across all industries and company
            sizes. Well trained, they have the skills you're looking for to
            start working with your teams immediately.
          </p>
        </>
      ),
    },
    {
      icon: icon5,
      title: "For the economy",
      content: (
        <>
          <p>
            Our campuses, located in the world's most innovative cities, harness
            exciting energy and foster inclusivity and creativity.
          </p>
          <p>
            Train world-class software engineers while developing tech talent,
            fuel local companies, growth and economic development, and attract
            more companies to your city, state or country!
          </p>
        </>
      ),
    },
  ];

  // Toggle dropdown: open if closed, close if open
  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <section className="section2">
        <div className="main_container">
          <div className="left_container">
            <p className="Bold_text">
              The school where you learn <span>why</span> , not just{" "}
              <span>how.</span>
            </p>
            <p className="some_text1">
              Holberton School is a Computer Science school founded in Silicon
              Valley to address the gap in the education system for aspiring
              software engineers.
            </p>
            <p className="some_text2">
              After Holberton School opened its doors in 2016, the world's most
              innovative companies have noticed. Graduates have found jobs at
              LinkedIn, Google, Tesla, Docker, Apple, Dropbox, Facebook,
              Pinterest, Genentech, Cisco, IBM, and more.
            </p>
          </div>
          <div className="right_container">
            {dropdowns.map((item, idx) => (
              <div className="button1" key={idx}>
                <button
                  onClick={() => handleToggle(idx)}
                  className="div_header"
                >
                  <div className="img_div">
                    <img src={item.icon} alt="icon_image" />
                  </div>
                  {item.title}
                  <span> &gt; </span>
                </button>
                {openIndex === idx && (
                  <div className="text">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
