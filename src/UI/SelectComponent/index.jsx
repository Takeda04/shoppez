import React from "react";

const Select = ({ options }) => {
  return (
    <div className="selectBox">
      <h1>{options[0]}</h1>
      <ul className="selectMenu">
        {options.map((item, index) => (
          <li className="selectMenu_item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
