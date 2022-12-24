import PropTypes from 'prop-types';

import styles from './Button.module.scss';

/**
 * **Styled button according to Design System**
 *
 * @example
 * <Button styling={"dark" | "light" | "color" | "transparent"} type={"button" | "submit"} className={css.Additional_styles}>
 *    {children}
 * </Button>
 *
 * **/
const Button = ({ styling, type = 'button', children, className }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[styling]} ${className ?? ''}`}
    >
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
