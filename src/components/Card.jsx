import { quotes } from '../assets';
import PropTypes from 'prop-types';

const Card = ({ content, name, title, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={quotes} alt='double_quotes' className='w-[42.6px] h-[27.6px] object-contain' />
    <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>{content}</p>

    <div className='flex flex-row'>
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired, // 使用 PropTypes 定义 icon prop 的类型为字符串，并且是必需的
  title: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
