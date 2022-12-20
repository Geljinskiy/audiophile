import styles from './MianButton.module.scss';

const MainButton = ({ btnStyle, children }) => {
  return (
    <button className={`${styles.button} ${styles[btnStyle]}`}>
      {children}
    </button>
  );
};


export default MainButton;
