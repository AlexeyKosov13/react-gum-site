import "./Reviews.scss";
import { reviewsData } from "../../data/reviewsData";
import { useState } from "react";
import {motion} from "framer-motion";

const Reviews = () => {
  const [selected, setSelected] = useState(0);
  const reviewsLength = reviewsData.length;
  const transition = {type: 'spring', duration: 3};

  return (
    <section className="reviews" id="reviews">
      <div className="container reviews__container">
        <div className="reviews__left">
          <div className="reviews__subtitle section-subtitle">Отзывы</div>
          <h2 className="reviews__title title">
            <span className="stroke-text">Что говорят</span>
            <span>о нас клиенты</span>
          </h2>
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            className="reviews__text">{reviewsData[selected].review}</motion.div>
          <div className="reviews__status">
            <p>{reviewsData[selected].name} -</p>
            <p>{reviewsData[selected].status}</p>
          </div>
        </div>

        <div className="reviews__right">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={reviewsData[selected].image}
            alt={reviewsData[selected].name}
            className="reviews__img"
          />
          <div className="reviews__arrows">
                      <img
                          onClick={() => {
                              selected === 0 ? setSelected(reviewsLength - 1) : setSelected((prev) => prev - 1)
                          }}
              src="assets/leftArrow.png"
              alt="left arrow"
              className="reviews__arrows-left reviews__arrow"
            />
                      <img
                          onClick={() => {
                            selected === reviewsLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                        }}
              src="assets/rightArrow.png"
              alt="right arrow"
              className="reviews__arrows-right reviews__arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
