import css from './Section.module.scss';

/**
 * React Component which returns children wrapped in a section tag
 *
 * @param {JSX.Element} children - JSX Element
 * @param {!string} className - scss class with additional styles
 *
 * @example
 *
 * <Section className={string}>{children}</Section>
 */
const Section = ({ children, className }) => {
  return (
    <section className={`${css.section} ${className ?? ''}`}>
      {children}
    </section>
  );
};

export default Section;
