import React from 'react';
import '../styles/QuestionBank.css';
import SimpleImageSlider from 'react-simple-image-slider';
import { IoIosArrowDown } from 'react-icons/io';

function QuestionBank() {
  const images = [
    {
      url: '/images/question-bank-img1.jpg',
    },
    {
      url: '/images/question-bank-img2.jpg',
    },
    {
      url: '/images/question-bank-img3.jpg',
    },
  ];

  return (
    <div className="question-bank">
      <div className="images">
        <SimpleImageSlider
          width={400}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="question-text">
        <h2>Prelims QBank with Explanations in Visual Learning Format</h2>
        <ul className="list">
          <li>High Yield Prelims Questions with Mains Explanations</li>
          <li>Visual Learning Format, Stories, Animations</li>
          <li>
            Precise, Qualitative & Effective with Proven Track Record Across
            Multiple Prelims Exams of Different States
          </li>
          <li>Extensive Subject Wise Coverage of Questions</li>
          <li>Goldmine for Your Success in Judiciary Exams</li>
        </ul>
        <button className="download-btn">
          <span className="download-icon">
            <IoIosArrowDown />
          </span>
          <span>Download Free</span>
        </button>
      </div>
    </div>
  );
}

export default QuestionBank;
