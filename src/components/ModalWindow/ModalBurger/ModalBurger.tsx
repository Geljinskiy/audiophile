// libs imports
import React, { useEffect, useState } from 'react';
// local imports
import css from './ModalBurger.module.scss';
import { ShopLinks } from 'components/sections';

type ModalBurgerProps = {
  //   close: () => void;
};

const ModalBurger: React.FC<ModalBurgerProps> = () => {
  return (
    <div className={css.modalWrapper}>
      <ShopLinks />
    </div>
  );
};

export default ModalBurger;
