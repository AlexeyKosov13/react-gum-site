import './Footer.scss';

const Footer = () => {
  return (
      <footer className="footer">
          <div className="container footer__container">
              <ul className="footer__list">
                  <li className="footer__item"><a href="#"><img src="assets/instagram.png" alt="instagram link" className="footer__img" /></a></li>
                  <li className="footer__item"><a href="#"><img src="assets/github.png" alt="github link" className="footer__img" /></a></li>
                  <li className="footer__item"><a href="#"><img src="assets/linkedin.png" alt="linkedin link" className="footer__img" /></a></li>
              </ul>
              <a href="#" className="footer__link">
              <img src="assets/logo.png" alt="logo" className="footer__logo" />
              </a>
              
      </div>
      <div className="blur footer__blur-1"></div>
      <div className="blur footer__blur-2"></div>
    </footer>
  )
}

export default Footer