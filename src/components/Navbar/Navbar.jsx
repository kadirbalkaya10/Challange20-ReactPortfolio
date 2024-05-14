import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link key={1} to='/' className='btn btn-ghost text-xl'>
          My Profile
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 '>
          <li className='flex-row'>
            <Link key={2} to='/about'>
              About
            </Link>
            <Link key={3} to='/portfolio'>
              Portfolio
            </Link>
            <Link key={4} to='/resume'>
              Resume
            </Link>
            <Link key={5} to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
