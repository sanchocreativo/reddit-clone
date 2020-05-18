import React, { memo } from 'react';
import styles from './listNotFound.module.scss';

const ListNotFound = ({ className, title, subTitle }) => {

    return (
        <div className={`${className} ${styles.listNotFound}`}>
            <div className={styles.title}>
                {title || "There are no posts"}
            </div>
            <div className={styles.subTitle}>
                {subTitle || "Please Refresh this page or return later"}
            </div>
        </div>
    );
}
export default memo(ListNotFound);