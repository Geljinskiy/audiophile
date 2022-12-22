import css from './Container.module.scss';

const Container = ({ children, className }) => {
  return (
    <div className={`${css.container} ${className ?? ''}`}>{children}</div>
  );
};

export default Container;
