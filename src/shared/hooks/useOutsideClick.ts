import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, closeCallback: () => void) => {
  useEffect(() => {
    const closePopupHandler = (e: MouseEvent) => {
      if (ref.current && !e.composedPath().includes(ref.current as EventTarget)) {
        closeCallback();
      }
    };

    document.body.addEventListener('click', closePopupHandler);

    return () => document.body.removeEventListener('click', closePopupHandler);
  }, []);
};
