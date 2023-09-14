import React from 'react';
import { SelectComponent } from '../../UI';

const Categories = () => {
  const selectValues = [
    { default: 'TV & Audio', options: ['Samsung', 'Artel', 'Huawei', 'Apple TV'] },
    { default: 'Smart TVs', options: ['Samsung', 'Artel', 'Huawei', 'Apple TV'] },
    { default: '4K TVs', options: ['Samsung', 'Artel', 'Huawei', 'Apple TV'] },
    { default: 'Full HD TVs', options: ['Samsung', 'Artel', 'Huawei', 'Apple TV'] },
    { default: 'Speakers', options: ['AitPods', 'AirPods Max', 'Huawei', 'Apple TV'] },
    { default: 'Home Thetres', options: ['Samsung', 'Artel', 'Huawei', 'Apple TV'] },
    { default: 'Projectors', options: ['Samsung', 'Artel', 'Huawei', 'Apple TV'] },
  ];

  return (
    <div className='categories'>
      <div className='container'>
        <div className='select-boxes'>
          {selectValues.map((sel, i) => (
            <div className='select-box'>
              <SelectComponent option={sel} i={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
