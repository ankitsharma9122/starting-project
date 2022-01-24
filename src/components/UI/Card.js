import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  //uska class insme kyun inject kiye
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;