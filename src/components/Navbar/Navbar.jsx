import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
      <Link key={1} to='/about' className='m-2'>
        About
      </Link>
      <Link key={2} to='/portfolio' className='m-2'>
        Portfolio
      </Link>
      <Link key={3} to='/resume' className='m-2'>
        Resume
      </Link>
      <Link key={4} to='/contact' className='m-2'>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
