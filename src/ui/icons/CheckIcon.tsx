import React, { FC } from 'react';
import { Icon } from './Icon.types';

const CheckIcon: FC<Icon> = ({ color = 'black', height = 24, width = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.7 7.2C18.3 6.8 17.7 6.8 17.3 7.2L9.8 14.7L6.7 11.6C6.3 11.2 5.7 11.2 5.3 11.6C4.9 12 4.9 12.6 5.3 13L9.1 16.8C9.3 17 9.5 17.1 9.8 17.1C10.1 17.1 10.3 17 10.5 16.8L18.7 8.6C19.1 8.2 19.1 7.6 18.7 7.2Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckIcon;
