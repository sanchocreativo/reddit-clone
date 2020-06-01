import React, { memo, useEffect, useState, useCallback } from 'react';
import styles from './postsLoader.module.scss';
import HeaderPosts from '../HeaderPosts';
import Content from '../../../shared/components/Content';
import ListNotFound from '../../../shared/components/ListNotFound';
import ListContainer from '../../../shared/components/ListContainer';
import Button from '../../../shared/components/Button';
import {  useSelector } from "react-redux";
import { postsSelector } from "../../selectors/posts"
import moment from 'moment';
import { MessageSquare, X } from 'react-feather';
import { defaultLimit as limitConf, defaultPage } from '../../../app/conf';

const defaultFilters = {
    limit: limitConf,
    page: defaultPage
}

const PostsLoader = ({ history, getPostsRequest, setPosts }) => {

    const { fetching, data, total} = useSelector(postsSelector);

    const images = ["jpg", "gif", "png", "jpeg"]
    const videos = ["https://v.redd.it/"]
    const extension = (url) => url.substr(url.length - 3);
    const extensionVideo = (url) => url.substr(0, 18);


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

    console.log(openPost);
    

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
                                            <h3 className={styles.title}>{post.data.title}</h3>
                                            <div className={styles.bottomSection}>
                                                <div className={styles.commentIcon}>
                                                    <MessageSquare  color="#ccc" size={14} />
                                                </div>
                                                <span className={styles.subreddit}> {post.data.num_comments}</span>
                                                
                                                <Button>
                                                    <X  color="#fff" size={23} />
                                                    Dismiss Post
                                                </Button>
                                                {/* <div className={styles.subreddit}>{post.data.score} upvotes </div> */}

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
                    <div className={styles.postOpened} open={isOpenDialog} onClick={closeOpenDialog}>

                        <div className={styles.closeLink}>
                            <X  color="#888" size={23} />
                        </div>

                       { console.log(videos.includes(extensionVideo(openPost.url)))}
                        
                        <h2 className={styles.title}>{openPost.title}</h2>
                        {   
                            images.includes(extension(openPost.url)) 
                            ?
                                <img src={openPost.url} alt={openPost.title} />
                                : ( videos.includes(extensionVideo(openPost.url)) ? 
                            
                                <video width={openPost.media.reddit_video.width} height={openPost.media.reddit_video.height} controls autoPlay>
                                    <source src={openPost.media.reddit_video.fallback_url} />
                                </video>
                                : 
                                <a href={openPost.url} >{openPost.url}</a>
                                )
                        }
                    </div>
                }

                {!fetching && data.length === 0 && <ListNotFound />}
                {!fetching  && !isOpenDialog &&
                <ListNotFound title="Click on a post to see it right here!" subTitleShow={false} />
                }

            </Content>
        </>
    );
};

export default memo(PostsLoader);
