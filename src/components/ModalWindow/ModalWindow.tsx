// libs imports
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// local imports
import { Container } from 'components/common';
import { ModalCart } from './ModalCart';
import css from './ModalWindow.module.scss';
import { ModalBurger } from './ModalBurger';
import { ModalReciept } from './ModalReciept';
import { ScrollTop } from 'utils';

type ModalWindowProps = {
  isOpen: boolean;
  close: () => void;
  type: 'cart' | 'burger' | 'reciept';
};
const modalRoot = document.getElementById('modal-root')!;

const ModalWindowWrapper = ({ isOpen, close, type }: ModalWindowProps) => {
  return createPortal(
    <>
      <ScrollTop />
      <ModalWindow close={close} isOpen={isOpen} type={type} />{' '}
    </>,
    modalRoot
  );
};

const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, close, type }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, close]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className={css.backdrop}>
      <div ref={modalRef}>
        {type === 'burger' && <ModalBurger />}
        <Container
          className={`${css.container} ${
            type === 'cart' && css.container_cart
          } ${type === 'reciept' && css.container_reciept}`}
        >
          <div
            className={css.modal}
            onClick={e => e.stopPropagation()}
            ref={modalRef}
          >
            {type === 'cart' && <ModalCart close={close} />}
            {type === 'reciept' && <ModalReciept />}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ModalWindowWrapper;
