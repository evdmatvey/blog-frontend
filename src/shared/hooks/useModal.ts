import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const openModalHandler = () => setOpen(true);
  const closeModalHandler = () => setOpen(false);

  return { isOpen, openModalHandler, closeModalHandler };
};
