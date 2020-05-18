import React, { memo } from 'react';
import styles from './body.module.scss';

const Body = ({ children }) =>
    <div className={styles.Body}>{children}</div>

export default memo(Body);