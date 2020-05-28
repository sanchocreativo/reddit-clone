import React, { memo } from 'react';
import Skeleton from 'react-skeleton-loader';
import styleVariables from '../../styles/variables.scss';
const SkeletonText = ({ width, height, heightRandomness, widthRandomness }) => (
    <>
        <Skeleton
            animated
            borderRadius={styleVariables.defaultBorderRadius}
            color={styleVariables.skeletonBackgroundColor}
            width={width}
            height={height}
            heightRandomness={heightRandomness}
            widthRandomness={widthRandomness}
        />
    </>
);

export default memo(SkeletonText);