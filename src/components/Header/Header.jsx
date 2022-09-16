import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id="header">
      <div className="container">
        <div className="header__wrapper">
          <img
            src="assets/logo.png"
            alt="logo company"
            className="header__logo"
          />
          {menuOpened === false && mobile === true ? (
            <div onClick={() => setMenuOpened(true)} className="header__burger-wrapper">
              <img
                src="assets/bars.png"
                alt="burger menu"
                className="header__burger"
              />
            </div>
          ) : (
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                    <Link
                     
                       to="header"
                       spy={true}
                       smooth={true}
                    className="header__link"
                    onClick={() => setMenuOpened(false)}
                  >
                    Домой
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="programs"
                    spy={true}
                    smooth={true}
                    className="header__link"
                    onClick={() => setMenuOpened(false)}
                  >
                    Программы
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="reasons"
                    spy={true}
                    smooth={true}
                    className="header__link"
                    onClick={() => setMenuOpened(false)}
                  >
                    О нас
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="plans"
                    spy={true}
                    smooth={true}
                    className="header__link"
                    onClick={() => setMenuOpened(false)}
                  >
                    Планы
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="reviews"
                    spy={true}
                    smooth={true}
                    className="header__link"
                    onClick={() => setMenuOpened(false)}
                  >
                    Отзывы
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
