// libs imports
import React from 'react';
// local imports
import { Section, Container } from 'components/common';
import { ShopLink } from './ShopLink';
import css from './ShopLinks.module.scss';
import { links } from 'data';

const ShopLinks: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Section className={css.section}>
        <ul className={css.list}>
          {links.map(link => {
            const { name } = link;
            return <ShopLink {...link} key={name} className={css.listItem} />;
          })}
        </ul>
      </Section>
    </Container>
  );
};

export default ShopLinks;
