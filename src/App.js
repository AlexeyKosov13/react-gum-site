import './Normalize.scss';
import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Reviews from './components/Reviews/Reviews';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App site-container">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Reviews />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
