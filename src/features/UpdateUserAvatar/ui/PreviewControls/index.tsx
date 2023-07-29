import { FC } from 'react';
import { CheckIcon, CloseIcon } from '@/shared/ui/icons';
import Button from '@/shared/ui/Button';

import styles from './PreviewControls.module.scss';

interface PreviewControlsProps {
  prepareHandler: () => void;
  cancelHandler: () => void;
}

const PreviewControls: FC<PreviewControlsProps> = ({ cancelHandler, prepareHandler }) => {
  return (
    <div className={styles.buttons}>
      <Button
        color="gray"
        type="icon-only"
        size="long"
        outlined
        withIcon
        children={<CheckIcon />}
        onClick={prepareHandler}
      />
      <Button
        color="gray"
        type="icon-only"
        size="long"
        outlined
        withIcon
        children={<CloseIcon />}
        onClick={cancelHandler}
      />
    </div>
  );
};

export default PreviewControls;
