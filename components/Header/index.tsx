import classNames from 'classnames';
import { LzButton, LzLink } from 'components';
import { LogoFull, SearchIcon } from 'public/icons';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { headerLinks } from './data';
import Styles from './Header.module.scss';

const Header = ()=> {

  return (
    <header className={classNames(Styles.Header, 'pt-10 pb-3 lg:py-3 xl:pr-4 sticky top-0 bg-white z-10 w-full')}>
      <div className='flex items-center justify-between px-4 lg:hidden'>
        <div className='flex items-center space-x-4 lg:hidden flex-nowrap'>
          <div tabIndex={0}>
            <FaBars />
          </div>
          <div className='flex items-center space-x-2'>
            <LzLink>
              <LogoFull />
            </LzLink>
            <LzLink to='/docs' className='p-2 px-2 py-1 rounded-8 bg-neu-50'>
              <h3 className='heading-6-s-sm'>Docs</h3>
            </LzLink>
            <div role='button' tabIndex={0} className="text-neu-500">
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div tabIndex={0}>
          <SearchIcon />
        </div>
      </div>
      <div className="items-center hidden w-full px-4 space-x-20 lg:flex lg:px-6 xl:pl-20">
        {/* TODO - create a standalone component search bar */}
        <input placeholder='Quick search' className="flex-1 w-3/6 bg-white lg:border lg:shadow-sm lz-input-sm lz-input rounded-5 border-neu-100" />
       
        <div className='flex items-center justify-between space-x-10'>
          <ul className='items-center hidden space-x-6 lg:flex'>
            {headerLinks.map(({ title, route })=> (
              <li className='paragraph-1-s text-neu-800' key={title}>
                <LzLink to={route}>{title}</LzLink>
              </li>
            ))}
          </ul>
          <LzButton size='md'>Dashboard</LzButton>
        </div>
      </div>
    </header>
  );
};

export default Header;