import { logo } from '../assets';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='logo' className='w-[164px] h-[38px]' />
      <Sidebar />
    </nav>
  );
};

export default Navbar;
