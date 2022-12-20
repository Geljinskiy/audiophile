import PropTypes from 'prop-types';

import styles from './MianButton.module.scss';

const Button = ({ style, type = 'button', children }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[style]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
