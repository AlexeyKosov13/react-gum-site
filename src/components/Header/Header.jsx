import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <img
            src="assets/logo.png"
            alt="logo company"
            className="header__logo"
          />
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__link">
                  Домой
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Программы
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  О нас
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Планы
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Отзывы
                </a>
              </li>
            </ul>
          
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
