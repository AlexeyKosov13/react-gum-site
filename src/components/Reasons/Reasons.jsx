import "./Reasons.scss";

const Reasons = () => {
  return (
    <section className="reasons" id="reasons">
      <div className="container reasons__container">
        <div className="reasons__left">
          <img src="assets/image1.png" alt="reasons image" />
          <img src="assets/image2.png" alt="reasons image" />
          <img src="assets/image3.png" alt="reasons image" />
          <img src="assets/image4.png" alt="reasons image" />
        </div>
        <div className="reasons__right">
          <p className="reasons__subtitle section-subtitle">Причины</p>
          <div className="reasons__title">
            <span className="stroke-text">Почему</span> выбирают нас?
          </div>

          <ul className="reasons__list">
            <li className="reasons__item">
              Более 40+ профессиональных тренеров
            </li>
            <li className="reasons__item">Тренировки умнее и быстрее чем</li>
            <li className="reasons__item">
              1 бесплатная программа для новых клиентов
            </li>
            <li className="reasons__item">Надежные партнеры</li>
          </ul>
          <h4 className="partners__title">Наши партнеры</h4>
          <div className="reasons__partners">
            <img
              src="assets/nike.png"
              alt="nike partner"
              className="reasons__partner"
            />
            <img
              src="assets/nb.png"
              alt="nb partner"
              className="reasons__partner"
            />
            <img
              src="assets/adidas.png"
              alt="adidas partner"
              className="reasons__partner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
