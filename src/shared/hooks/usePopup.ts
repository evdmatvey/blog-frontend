import { RefObject, useState } from 'react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';

type PopupState = boolean;
type PopupOpen = () => void;

interface PopupResponse {
  open: PopupState;
  openPopupHandler: PopupOpen;
}

export const usePopup = (ref: RefObject<HTMLElement>): PopupResponse => {
  const [open, setOpen] = useState<PopupState>(false);

  const openPopupHandler: PopupOpen = () => setOpen((prev) => !prev);

  useOutsideClick(ref, () => setOpen(false));

  return { open, openPopupHandler };
};
