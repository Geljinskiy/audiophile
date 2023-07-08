// libs imports
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// local imports
import css from './ModalWindow.module.scss';
import { ModalCart } from './ModalCart';
import { Container } from 'components/common';

type ModalWindowProps = {
  isOpen: boolean;
  close: () => void;
};
const modalRoot = document.getElementById('modal-root')!;

const ModalWindowWrapper = ({ ...props }: ModalWindowProps) => {
  return createPortal(<ModalWindow {...props} />, modalRoot);
};

const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, close }) => {
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.preventScroll);
    } else {
      document.body.classList.remove(css.preventScroll);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.backdrop}>
      <Container className={css.container}>
        <div
          className={css.modal}
          onClick={e => e.stopPropagation()}
          ref={modalRef}
        >
          <ModalCart close={close}  />
        </div>
      </Container>
    </div>
  );
};

export default ModalWindowWrapper;
