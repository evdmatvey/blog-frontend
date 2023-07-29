import Button from '@/shared/ui/Button';
import { UpdateIcon } from '@/shared/ui/icons';
import React, { FC } from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <Button color="base" size="short" type="common" withIcon outlined>
      <UpdateIcon />
      {isSubmitting ? 'Обновляется' : 'Обновить'}
    </Button>
  );
};

export default SubmitButton;
