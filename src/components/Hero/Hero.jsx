import Header from "../Header/Header";
import "./Hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NubmerCounter from "number-counter";

const Hero = () => {

  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <section className="hero">    
    <div className="hero__blur blur"></div>  
        <div className="hero__content">
          <Header />
          <div className="hero__ad">          
            <motion.div
            initial={{left: mobile?'180px' : '220px'}}
            whileInView={{left:mobile?'12px':'8px'}}
            transition={{...transition, type: 'tween'}}
            className="hero__circle"
            ></motion.div>          
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
            <div className="figure__total">
              <NubmerCounter end={25} start={10} delay={4} preFix="+" />
              </div>
              <div className="figure__text">Профессиональных тренеров</div>
            </div>
            <div className="hero__figure">
              <div className="figure__total"><NubmerCounter end={350} start={300} delay={4} preFix="+" /></div>
              <div className="figure__text">Участников марафона</div>
            </div>
            <div className="hero__figure">
              <div className="figure__total"><NubmerCounter end={45} start={20} delay={4} preFix="+" /></div>
              <div className="figure__text">Фитнесс программ</div>
            </div>
          </div>

          <div className="hero__buttons">
          <div className="btn btn-reset hero__btn btn--orange">
            <Link
             to="join"
             spy={true}
             smooth={true}
            >Вступить</Link>
            </div>
          <div className="btn btn-reset hero__btn btn--transp">
          <Link
             to="reasons"
             spy={true}
             smooth={true}
            >Узнать больше</Link>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <button className="btn btn-reset btn__enter">Вступить</button>
          <motion.div 
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
          className="hero__heart heart">
            <img src="assets/heart.png" alt="heart icon" className="heart__img" />
            <span className="heart__rate">Пульс</span>
            <span className="heart__total">117 bpm</span>
          </motion.div>
        <img src="assets/hero.png" alt="fitness man" className="hero__img" />
        {/* <img src="assets/hero_line.png" alt="back" className="hero__img-back" /> */}
        <motion.div 
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="hero__calories calories">
          <img src="assets/graph.png" alt="calories" className="calories__img" />
          <div className="calories__text">
            <span className="calories__burned">Сожжено калорий</span>
            <span className="calories__total">220 kk</span>
          </div>
          
        </motion.div>
        </div>     
    </section>
  );
};

export default Hero;
