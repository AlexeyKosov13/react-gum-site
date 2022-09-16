import './Plans.scss';

import { plansData } from '../../data/plansData';


const Plans = () => {
  return (
      <section className="plans__section" id='plans'>
          <div className="blur plans__blur-1"></div>
          <div className="blur plans__blur-2"></div>
          <div className="container plans__container">
              <h2 className='plans__title section-title'> <span className='stroke-text'>Готовы начать </span> заниматься <span className='stroke-text'>вместе с нами?</span></h2>
              
              <div className="plans">
                  {plansData.map((plan, index) => (
                      <div className="plan" key={index}>
                          {plan.icon}
                          <h4 className="plan__name">{plan.name}</h4>
                          <div className="plan__price">{plan.price}  ₽</div>
                          <ul className="features">
                              {plan.features.map((feature, index) => (
                                  <li className="feature" key={index}>
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                          <p className="feature__more">Больше выгоды ➜</p>
                          <button className="btn btn-reset plan__btn">Начать</button>
                      </div>
                  ))}
              </div>
          </div>
    </section>
  )
}

export default Plans