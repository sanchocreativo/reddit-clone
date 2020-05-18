import React, { memo } from 'react';
import styles from './content.module.scss';

const Content = ({ children }) => <div className={styles.content}>{children}</div>;

export default memo(Content);
