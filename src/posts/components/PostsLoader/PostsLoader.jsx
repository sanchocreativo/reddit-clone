import React, { memo, useEffect, useState, useCallback } from 'react';
import styles from './postsLoader.module.scss';
import HeaderPosts from '../HeaderPosts';
import Content from '../../../shared/components/Content';
import ListNotFound from '../../../shared/components/ListNotFound';
import ListContainer from '../../../shared/components/ListContainer';
import {  useSelector } from "react-redux";
import { postsSelector } from "../../selectors/posts"
import moment from 'moment';
import { MessageSquare } from 'react-feather';
import { defaultLimit as limitConf, defaultPage } from '../../../app/conf';


const defaultFilters = {
    limit: limitConf,
    page: defaultPage
}

const PostsLoader = ({ history, getPostsRequest, setPosts }) => {

    const { fetching, data, total} = useSelector(postsSelector);

    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [openPost, setOpenPost] = useState({});
    const [page, setPage] = useState(defaultFilters.page);
    const [limit, setLimit] = useState(defaultFilters.limit);

    const selectposts = (index) => {
        setOpenPost(data[index]["data"]);
        setIsOpenDialog(true);
    }

    const closeOpenDialog = () => {
        setOpenPost({});
        setIsOpenDialog(false);
    }

    const getMoreItems = () => {
        const _page = page + 1;

        const _limit = limit + 10;

        setLimit(_limit);

        let filters = {
            limit: limit,
            page: _page
        }

        console.log(filters);

        setPage(_page);
        getPostsRequest(filters);
    };

    const getPosts = useCallback(() => {

        setPosts();

        let filters = {
             ...defaultFilters,
        }

        setPage( defaultFilters.page);
        getPostsRequest(filters);
    }, [ setPosts, getPostsRequest]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    
    useEffect(() => {
        return () => {
           setPosts();
        }
    }, [setPosts])



    return (
        <>
            <HeaderPosts history={history} />

            <Content>
             
                {(fetching || data.length > 0) && (
                    <ListContainer
                        loading={fetching && page === 1}
                        totalItems={total}
                        fetchingMoreItems={fetching && page > defaultFilters.page}
                        onScrollBottomAction={getMoreItems}
                    >
                        {
                            data.map((post, index) => (
                                <div key={index} onClick={selectposts.bind(this, index)}>
                                    <div className={styles.flexPostSingle}>

                                        <img className={styles.thumbnail} src={post.data.thumbnail} alt={post.data.title} />
                                      
                                        <div className={styles.content}>
                                            <div className={styles.author}>
                                                <span className={styles.subreddit}>{post.data.subreddit_name_prefixed}</span>
                                                <span className={styles.authorName}>Posted by {post.data.author}</span>
                                                <span className={styles.date}>{moment.unix(post.data.created_utc).fromNow()}</span>
                                            </div>
                                            <div className={styles.title}>{post.data.title}</div>
                                            <div className={styles.divRow}>
                                                <MessageSquare  color="#ccc" size={14} />
                                                <span className={styles.subreddit}> {post.data.num_comments}</span>
                                                <div className={styles.subreddit}>{post.data.score} upvotes </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </ListContainer>
                )}
                {
                    isOpenDialog &&
                    <div open={isOpenDialog} onClick={closeOpenDialog}  >

                        {openPost.title}

                        {openPost.url &&
                            <img src={openPost.url} alt={openPost.title} />
                        }
                        
                    </div>
                }

                {!fetching && data.length === 0 && <ListNotFound />}
            </Content>
        </>
    );
};

export default memo(PostsLoader);
