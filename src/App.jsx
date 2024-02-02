import styles from './style';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Lesson from './components/Lesson';
import Serve from './components/Serve';
import Footer from './components/Footer';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Lesson />
        <Serve />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
