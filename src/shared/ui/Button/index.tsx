import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  color: 'base' | 'white' | 'black' | 'yellow' | 'red' | 'gray';
  type: 'common' | 'icon-only';
  size: 'base' | 'medium' | 'long' | 'longest' | 'short' | 'small' | 'large';
  onClick?: (value?: any) => void;
  withIcon?: boolean;
  outlined?: boolean;
  actualState?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  onClick,
  size,
  type,
  withIcon,
  outlined,
  actualState,
}) => {
  return (
    <button
      className={`${styles.button}
        ${styles[`c-${color}`]}
        ${styles[`s-${size}`]}
        ${styles[type]}
        ${withIcon ? '' : styles.without}
        ${outlined ? styles.outlined : ''}
        ${actualState ? styles.active : ''}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
