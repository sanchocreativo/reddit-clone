import React, { memo} from 'react';
import styles from './headerPosts.module.scss';
import { X } from 'react-feather';
import Button from '../../../shared/components/Button';

const HeaderPosts = () => {
    return (
        <div className={styles.header}>
            <Button>
                <X  color="#fff" size={23} />
                Dismiss All Posts
            </Button>
        </div>
 
 );
};

export default memo(HeaderPosts);
