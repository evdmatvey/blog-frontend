import { FC, ReactNode } from 'react';
import { CloseIcon } from '../icons';

import styles from './Model.module.scss';

interface ModalProps {
  children: ReactNode;
  closeHandler: () => void;
}

const Modal: FC<ModalProps> = ({ children, closeHandler }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {children}
        <button className={styles.close} onClick={closeHandler}>
          <CloseIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
