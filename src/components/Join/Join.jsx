import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Join.scss";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s55zuvs', 'template_cu51ppo', form.current, 'tJp-Z8xUsFWhX1NEd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="join" id="join">
      <div className="container join__container">
        <div className="join__left">
          <div className="join__line"></div>
          <h2 className="join__text">
            <span className="stroke-text">Готовы</span> прокачать свое тело{" "}
            <span className="stroke-text">с нами?</span>
          </h2>
        </div>
        <div className="join__right">
          <form ref={form} action="" className="join__form" onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              placeholder="Введите свой Email адрес"
            />
            <button className="btn btn-reset join__btn">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
