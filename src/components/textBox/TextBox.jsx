import React from 'react';
import './textBox.scss';

const TextBox = ({ title, value }) => {
  return (
    <div className="textBox">
      <div className="boxInfo">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default TextBox;