import styles from './MianButton.module.scss';
import PropTypes from 'prop-types';

const MainButton = ({ btnStyle, btnType="button", children }) => {
  return (
    <button type={btnType} className={`${styles.button} ${styles[btnStyle]}`}>
      {children}
    </button>
  );
};

MainButton.propTypes = {
  btnStyle: PropTypes.string.isRequired,
  btnType: PropTypes.string,
};

export default MainButton;
