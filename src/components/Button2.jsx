import PropTypes from 'prop-types';

const Button = ({ styles }) => (
  <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-orange-400 rounded-[10px] outline-none ${styles}`}>
    怪獸商城
  </button>
);

Button.propTypes = {
  styles: PropTypes.string, // 假设 styles 是一个字符串，你可以根据实际情况调整类型
  // 其他的 propTypes...
};
export default Button;
