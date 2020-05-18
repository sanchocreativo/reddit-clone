import React, { memo } from 'react';
import styles from '../listHeader.module.scss';

const ItemHeader = ({ children, className, ...props }) =>
    <div className={`${styles.itemHeader} ${className}`} {...props}>
        {children}
    </div>

export default memo(ItemHeader);