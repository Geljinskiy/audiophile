import { useState } from 'react';

const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useModal;
