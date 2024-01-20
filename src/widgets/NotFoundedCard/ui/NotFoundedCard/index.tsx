import Image from 'next/image';
import Button from '@/shared/ui/Button';
import { BackIcon } from '@/shared/ui/icons';

import styles from './NotFoundedCard.module.scss';
import { useRouter } from 'next/router';

const NotFoundedCard = () => {
  const router = useRouter();

  const toHomeHandler = () => {
    router.push('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          width={60}
          height={60}
          unoptimized
          alt="error"
          src={'/error.png'}
        />
        <h1 className={styles.title}>Ой, что-то пошло не так!</h1>
        <Button color="base" size="medium" type="common" outlined withIcon onClick={toHomeHandler}>
          <BackIcon />
          На главную
        </Button>
      </div>
    </div>
  );
};

export default NotFoundedCard;
