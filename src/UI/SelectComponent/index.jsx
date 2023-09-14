import React from 'react';

const Select = ({ option, i }) => {
  return (
    <div className='selectBox' key={i}>
      <h1>{option.default}</h1>
      <ul className='selectMenu'>
        {option.options.map((op, i) => (
          <li className='selectMenu_item' key={i}>
            {op}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
