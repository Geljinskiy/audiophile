import css from './Section.module.scss';

const Section = ({ children, className }) => {
  return (
    <section className={`${css.section} ${className ?? ''}`}>
      {children}
    </section>
  );
};

export default Section;
