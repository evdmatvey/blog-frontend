import { FC } from 'react';

import styles from './ErrorText.module.scss';

interface ErrorTextProps {
  errorMessage: string;
}

const ErrorText: FC<ErrorTextProps> = ({ errorMessage }) => {
  return <p className={styles.error}>{errorMessage}</p>;
};

export default ErrorText;
