import React from 'react';

import './Card.css';

console.log("card");

const Card = props => {
  // {console.log(props)};
  // {console.log(props.className)};
  // {console.log(props.style)};
  // {console.log(props.children)};
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
