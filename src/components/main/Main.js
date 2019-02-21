import React from 'react';

import './main.scss';

export const Main = (props) =>{
  return (
      <main className="main">
        {props.children}
      </main>
  )
};
