import Header from "../Header/Header";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">     
        <div className="hero__content">
          <Header />
          <div className="hero__ad">
            <div className="hero__circle"></div>
            <span className="hero__ad-text">Лучший фитнесс-клуб в городе</span>
          </div>
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="stroke-text">Создай</span> свое идеальное тело
            </h1>
            <p className="hero__descr">Здесь мы поможем вам сформировать и построить ваше идеальное тело и жить полной жизнью</p>
          </div>
          <div className="hero__figures">
            <div className="hero__figure figure">
              <div className="figure__total">+25</div>
              <div className="figure__text">Профессиональных тренеров</div>
            </div>
            <div className="hero__figure">
              <div className="figure__total">+450</div>
              <div className="figure__text">Участников марафона</div>
            </div>
            <div className="hero__figure">
              <div className="figure__total">+46</div>
              <div className="figure__text">Фитнесс программ</div>
            </div>
          </div>

          <div className="hero__buttons">
            <div className="btn btn-reset hero__btn btn--orange">Вступить</div>
            <div className="btn btn-reset hero__btn btn--transp">Узнать больше</div>
          </div>
        </div>
        <div className="hero__right">
          <button className="btn btn-reset btn__enter">Вступить</button>
          <div className="hero__heart heart">
            <img src="assets/heart.png" alt="heart icon" className="heart__img" />
            <span className="heart__rate">Пульс</span>
            <span className="heart__total">117 bpm</span>
          </div>
        <img src="assets/hero.png" alt="fitness man" className="hero__img" />
        {/* <img src="assets/hero_line.png" alt="back" className="hero__img-back" /> */}
        <div className="hero__calories calories">
          <img src="assets/graph.png" alt="calories" className="calories__img" />
          <div className="calories__text">
            <span className="calories__burned">Сожжено калорий</span>
            <span className="calories__total">220 kk</span>
          </div>
          
        </div>
        </div>     
    </section>
  );
};

export default Hero;
