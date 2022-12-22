import PropTypes from 'prop-types';

import styles from './Button.module.scss';

/**
 * **Styled button according to Design System**
 *
 * @example
 * <Button styling={"dark" | "light" | "color" | "transparent"} type={"button" | "submit"}>
 *    {children}
 * </Button>
 *
 * **/
const Button = ({ styling, type = 'button', children }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[styling]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  styling: PropTypes.oneOf(['dark', 'light', 'color', 'transparent'])
    .isRequired,
  type: PropTypes.string,
};

export default Button;
