// lib imports
import React from 'react';
// local imports
import css from './Section.module.scss';

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <section className={`${css.section} ${className ?? ''}`}>
      {children}
    </section>
  );
};

export default Section;
