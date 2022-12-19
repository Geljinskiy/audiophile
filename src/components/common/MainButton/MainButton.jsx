import React from 'react';
import { ReactDOM } from 'react';

import './MainButton.scss';

const MainButton = ({ btnType, children }) => {
  return <button className='MainButton'>{children}</button>;
};

export default MainButton;
