import './Reasons.scss';

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
        <div className="reasons__right"></div>
        <p className="reasons__subtitle section-subtitle">Причины</p>
        
      </div>
      
    </section>
  )
}

export default Reasons