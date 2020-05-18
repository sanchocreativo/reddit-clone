import React, { memo } from 'react';
import ListItems from './subComponents/ListItems';
import ListItemSkeleton from './subComponents/ListItemSkeleton';
import styles from './listContainer.module.scss';

const ListContainer = ({ children, className, loading, skeletonColumn = 3, skeletonRow = 3, onClickItem, customSkeleton, ...props }) => {

    if (!loading) {
        return (
            <ListItems
                listItems={children}
                onClickItem={onClickItem}
                className={`${className} ${styles.listContainer}`}
                {...props}
            />
        )
    } else {
        return (
            <ListItemSkeleton
                skeletonColumn={skeletonColumn}
                skeletonRow={skeletonRow}
                className={`${className} ${styles.listContainer}`}
                customSkeleton={customSkeleton}
            />
        )
    }
}

export default memo(ListContainer);