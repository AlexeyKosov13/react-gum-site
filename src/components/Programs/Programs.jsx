import { programData, programsData } from '../../data/programsData';
import './Programs.scss';


const Programs = () => {
  return (
      <section className="programs" id="programs">
          <div className="container">
              <h2 className="programs__title section-title"><span className='stroke-text'>наши </span>  программы <span className='stroke-text'>для вашей</span> фигуры</h2>
              
              <div className="programs__categories">
                  {programsData.map((program, index) => (
                      <div className="category" key={index}>
                          {program.image}
                          <span className='category__title'>{program.heading}</span>
                          <span className='category__descr'>{program.details}</span>
                          <div className="category__btn"><span>Начать</span><img src="assets/rightArrow.png" alt="arrow right" className='category__arrow' /></div>
                      </div>
                  ))}
              </div>
          </div>
          
    </section>
  )
}

export default Programs