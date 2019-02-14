import { Link } from 'react-router-dom'

import './navigation.scss';
import React from "react";

export const Navigation = (props) => {
  const { list } = props;
  return (
    <ul className="main-nav">
      {list.map(item => <li key={item}><Link to={`/${item.toLowerCase()}`}>{item}</Link></li>)}
    </ul>
  );
};
