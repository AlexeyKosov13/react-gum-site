import "./Reviews.scss";
import { reviewsData } from "../../data/reviewsData";
import { useState } from "react";

const Reviews = () => {
  const [selected, setSelected] = useState(0);
  const reviewsLength = reviewsData.length;

  return (
    <section className="reviews" id="reviews">
      <div className="container reviews__container">
        <div className="reviews__left">
          <div className="reviews__subtitle section-subtitle">Отзывы</div>
          <h2 className="reviews__title title">
            <span className="stroke-text">Что говорят</span>
            <span>о нас клиенты</span>
          </h2>
          <div className="reviews__text">{reviewsData[selected].review}</div>
          <div className="reviews__status">
            <span>{reviewsData[selected].name}</span> -
            {reviewsData[selected].status}
          </div>
        </div>

        <div className="reviews__right">
          <div></div>
          <div></div>
          <img
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
