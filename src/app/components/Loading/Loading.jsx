import React, { memo } from 'react';
import Loader from 'react-loader-spinner';
import styles from './loading.module.scss';

const Loading = ({ theme = false }) => (
    <div className={styles.wrapper}>
        <Loader type="ThreeDots" className={`${styles.loader} ${theme && styles.theme}`} />
    </div>
);

export default memo(Loading);