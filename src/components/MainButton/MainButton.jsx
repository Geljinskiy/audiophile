import React from 'react';


import styles from './MianButton.module.scss';

const MainButton = ({ btnType, children }) => {
  return <button className={styles.MainButton}>{children}</button>;
};

export default MainButton;
