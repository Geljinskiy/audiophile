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
            const { name, images, target } = link;
            return (
              <li key={name} className={css.listItem}>
                <ShopLink
                  key={name}
                  images={images}
                  name={name}
                  target={target}
                />
              </li>
            );
          })}
        </ul>
      </Section>
    </Container>
  );
};

export default ShopLinks;
