import React, { memo } from 'react';
import styles from './listItem.module.scss';

const ListItem = ({ children, className, ...resp }) =>
    <div className={styles.wrapper}>
        <div className={`${className} ${styles.listItem}`} {...resp}>
            {children}
        </div>
        <hr />
    </div>

export default memo(ListItem);