import React, { memo, useEffect } from 'react';
import styles from './postsLoader.module.scss';
import ListHeader from '../../../shared/components/ListHeader';
import HeaderPosts from '../HeaderPosts';
import Content from '../../../shared/components/Content';

import { defaultPage } from "../../../app/conf";

const defaultFilters = {
    limit: 50,
    page: defaultPage
}

const PostsLoader = ({ history }) => {

    return (
        <>
            <HeaderPosts history={history} />
            <Content>
                <ListHeader>
                    <div className={styles.f20}>{'Title'}</div>
                    <div className={styles.f30}>{'Subtititle'}</div>
                    <div>{'Posts:title'}</div>
                </ListHeader>
            </Content>
        </>
    );
};

export default memo(PostsLoader);
