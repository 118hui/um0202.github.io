import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{content}</p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired, // 使用 PropTypes 定义 icon prop 的类型为字符串，并且是必需的
  title: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.string,
};

const Lesson = () => (
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        預約課程
        <br className='sm:block hidden' />
        正向訓練的精神
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Lesson;
