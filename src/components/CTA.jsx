import styles from '../style';
import Button from './Button';

const Cta = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-sky-600 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>趕快來有怪獸預約課程吧!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>有怪獸貓狗行為矯正中心成立的出發點其實很簡單： 希望用正向教育幫助更多狗狗和貓咪融入人類家庭。</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Cta;
