import React, { FC } from 'react';
import { Icon } from './Icon.types';

const BookmarkIcon: FC<Icon> = ({ color = 'black', height = 24, width = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5029 17.8357L12 17.5431L11.4971 17.8357L6.0805 20.9871C6.04865 20.9951 6.02115 20.9971 6 20.9964V5C6 3.85228 6.85228 3 8 3H16C17.1477 3 18 3.85228 18 5V21C17.9757 21 17.9576 21 17.9414 20.9999L12.5029 17.8357Z"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export default BookmarkIcon;
