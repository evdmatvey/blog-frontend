import Image from 'next/image';
import { FC } from 'react';
import confetti from 'canvas-confetti';
import placeholder from '~/placeholder.jpg';

import styles from './PreviewImage.module.scss';

interface PreviewImageProps {
  avatarUrl: string;
}

const PreviewImage: FC<PreviewImageProps> = ({ avatarUrl }) => {
  const getConfetti = () =>
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      scalar: 0.7,
      gravity: 1,
    });

  return avatarUrl ? (
    <Image
      alt="превью аватара"
      width={60}
      height={60}
      className={styles.image}
      unoptimized
      placeholder="blur"
      blurDataURL={`data:image/jpeg;charset=utf-8,${placeholder}`}
      onLoad={getConfetti}
      src={process.env.NEXT_PUBLIC_API_URI + avatarUrl}
    />
  ) : (
    <div className={styles.placeholder}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PreviewImage;
