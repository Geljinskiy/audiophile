import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [modalType, setType] = useState<'burger' | 'cart' | 'reciept'>(
    'burger'
  );

  
  const close = () => {
    setOpen(false);
  };

  const openBurger = () => {
    setOpen(true);
    setType('burger');
  };

  const openCart = () => {
    setOpen(true);
    setType('cart');
  };

  const openReciept = () => {
    setOpen(true);
    setType('reciept');
  };
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return {
    isOpen,
    close,
    openBurger,
    openCart,
    openReciept,
    modalType,
  };
};

export default useModal;
