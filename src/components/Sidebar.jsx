import { useState } from 'react';
import { navLinks } from '../constants';
import { three, cut } from '../assets';
import styles from '../style';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');
  return (
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={three} width='42' height='42' loading='lazy' alt='web design icon' />
        </button>
      ) : (
        <button className='fixed top-4 right-4' onClick={() => setIsOpen(!isOpen)}></button>
      )}
      <div className={`top-0 right-0 fixed z-10 bg-orange-400 w-[35vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <button className='text-xl text-white fixed top-4 right-4' onClick={() => setIsOpen(!isOpen)}>
          <img src={cut} width='40' height='40' loading='lazy' alt='web design icon' />
        </button>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[18px] ${styles.flexCenter} ${active === nav.title ? 'text-black' : 'text-black'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} onClick={() => setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
