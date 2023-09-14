import React from 'react';
import { BsGlobe } from 'react-icons/bs';
import SocialLinks from '../social-links';
import { SelectComponent } from '../../UI';
import { AiOutlineShop } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { FaLocationDot, FaBars } from 'react-icons/fa6';

const HeaderTop = () => {
  const navigate = useNavigate();

  const topSelectValues = [
    { default: 'Language', options: ['uz', 'ru', 'en'], Icon: BsGlobe },
    { default: 'Currency', options: ['$'], Icon: BiSolidDollarCircle },
  ];

  return (
    <div className='top'>
      <div className='container'>
        <div className='option-bar'>
          {topSelectValues.map((sel, i) => (
            <div className='select-box' key={i}>
              <span>
                <sel.Icon />
              </span>
              <SelectComponent option={sel} />
            </div>
          ))}
        </div>

        <div className='right-side'>
          <SocialLinks />
          <button className='top-bar-btn'>
            <FaBars />
          </button>
          <div className='top-buttons'>
            <button>
              <FaLocationDot />
              Track Order
            </button>
            <button onClick={() => navigate('/shop')}>
              <AiOutlineShop />
              Shop
            </button>
            <button>
              <IoIosSettings />
              Settings
            </button>
            <button>FAQ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
