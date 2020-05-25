import React, { memo } from 'react';
import styles from './button.module.scss';
import Loader from 'react-loader-spinner';
const Button = ({ className, onClick, children, secondButton = false, loading = false, disabled }) => {

    if (!loading) {
        return (
            <div className={`${className} ${styles.content}`}>
                < button className={` ${styles.button} ${secondButton && styles.secondButton}`} onClick={onClick} disabled={disabled}>
                    {children}
                </button >
            </div>
        );
    } else {
        return (
            <div className={`${className} ${styles.content} `}>
                < button className={`${styles.button} ${styles.loading} ${secondButton && styles.secondButton}`} disabled={disabled}>
                    <Loader type="ThreeDots" className={styles.loader} />
                </button >
            </div>

        );
    }

}

export default memo(Button);