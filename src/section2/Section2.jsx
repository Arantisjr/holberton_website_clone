import "../section2/Section2.scss";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";

const Section2 = () => {
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
          <div className="button1">
              <button className="div_header">
                <img src={icon2} alt="icon_image" />
                For Learners
                <span> &gt; </span>
              </button>
              <div className="text">
                <p>
                  Only motivation and talent is needed to learn Computer Science
                  from the ground up!
                </p>
                <p>
                  Our students collaborate on projects and learn from each
                  other. Regardless of your previous education, age, or gender,
                  you'll learn skills that employers value and reward in
                  Software Development Careers.
                </p>
              </div>
            </div>




            <div className="button1">
              {" "}
              <button className="div_header">
                <img src={icon1} alt="icon_image" />
                For career switchers
                <span> &gt; </span>
              </button>
              <div className="text">
                <p>
                No matter in which sector you were working in; 
                Computer Science might be the right path for you!
‍
                </p>
                <p>
                With our non-traditional methodology, you'll learn the skills of the future 
                that will help you get a well-paid job in the fastest growing industry. 
                </p>
              </div>
            </div>


            
            <div className="button1">
              {" "}
              <button className="div_header">
                <img src={icon3} alt="icon_image" />
                For Learners
                <span> &gt; </span>
              </button>
              <div className="text">
                <p>
                  Only motivation and talent is needed to learn Computer Science
                  from the ground up!
                </p>
                <p>
                  Our students collaborate on projects and learn from each
                  other. Regardless of your previous education, age, or gender,
                  you'll learn skills that employers value and reward in
                  Software Development Careers.
                </p>
              </div>
            </div>

            <div className="button1">
              {" "}
              <button className="div_header">
                <img src={icon4} alt="icon_image" />
                For Learners
                <span> &gt; </span>
              </button>
              <div className="text">
                <p>
                  Only motivation and talent is needed to learn Computer Science
                  from the ground up!
                </p>
                <p>
                  Our students collaborate on projects and learn from each
                  other. Regardless of your previous education, age, or gender,
                  you'll learn skills that employers value and reward in
                  Software Development Careers.
                </p>
              </div>
            </div>

            <div className="button1">
              {" "}
              <button className="div_header">
                <img src={icon5} alt="icon_image" />
                For Learners
                <span> &gt; </span>
              </button>
              <div className="text">
                <p>
                  Only motivation and talent is needed to learn Computer Science
                  from the ground up!
                </p>
                <p>
                  Our students collaborate on projects and learn from each
                  other. Regardless of your previous education, age, or gender,
                  you'll learn skills that employers value and reward in
                  Software Development Careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
