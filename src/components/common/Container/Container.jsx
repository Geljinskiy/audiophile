import css from './Container.module.scss';

/**
 * A React Component which returns children in a styled wrapped
 *
 * @param {string} className - scss class with additional styling
 * @param {JSX.Element} children - JSX Element
 *
 * @example <Container className={string}>{children}</Container>
 */
const Container = ({ children, className }) => {
  return (
    <div className={`${css.container} ${className ?? ''}`}>{children}</div>
  );
};

export default Container;
