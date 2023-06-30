// libs imports
import React from 'react';
// local imports
import css from './inBox.module.scss';
import { InBoxType } from 'utils';
import { Container, Section } from 'components/common';

type InBoxProps = {
  stuff: InBoxType[];
};

const InBox: React.FC<InBoxProps> = ({ stuff }) => {
  return (
    <>
      <h2 className={css.heading}>In the box</h2>
      <ul className={css.list}>
        {stuff.map(item => {
          const entries = Object.entries(item);
          const [key, value] = entries[0];
          return (
            <li key={key} className={css.listItem}>
              <span className={css.quantity}>{value}x</span>{' '}
              <span className={css.itemName}>{key}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default InBox;
