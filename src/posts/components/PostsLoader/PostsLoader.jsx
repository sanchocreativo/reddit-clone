import React, { memo, useEffect, useState, useCallback, useRef } from 'react';
import styles from './postsLoader.module.scss';
import HeaderPosts from '../HeaderPosts';
import Content from '../../../shared/components/Content';
import ListNotFound from '../../../shared/components/ListNotFound';
import ListContainer from '../../../shared/components/ListContainer';
import Button from '../../../shared/components/Button';
import {  useSelector } from "react-redux";
import { postsSelector } from "../../selectors/posts"
import { postsReadenSelector } from "../../../readStatus/selectors/readStatus"
import moment from 'moment';
import { MessageSquare,X, Download } from 'react-feather';
import { defaultLimit as limitConf, defaultPage } from '../../../app/conf';

const defaultFilters = {
    limit: limitConf,
    page: defaultPage
}

const PostsLoader = ({ history, getPostsRequest, setPosts, postIsReaden }) => {

    const { fetching, data, total} = useSelector(postsSelector);

    const alreadyReaden = useSelector(postsReadenSelector);
    
    const images = ["jpg", "gif", "png", "jpeg"]
    const videos = ["https://v.redd.it/"]
    const extension = (url) => url.substr(url.length - 3);
    const extensionVideo = (url) => url.substr(0, 18);

    const inputEl = useRef(null);

    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [openPost, setOpenPost] = useState({});
    const [currentData, setData] = useState([]);
    const [page, setPage] = useState(defaultFilters.page);
    const [limit, setLimit] = useState(defaultFilters.limit);

    const deletePost = id => {
        setData(currentData.filter(post => post.data.id !== id));
	}

    const onClickHideContent = () => {
        setData([]);
    }

  
    const convertImgToCanvas = (postImage) => {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        img.onload = function() {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            context.drawImage(img, 0, 0 );
            const canvasdata = canvas.toDataURL("image/jpg");
            console.log(canvasdata);
            
            const a = document.createElement("a");
            a.download = `${postImage}`;
            a.href = canvasdata;
            document.body.appendChild(a);
            a.click();  
        }
        img.src = `https://cors-anywhere.herokuapp.com/${postImage}`;
        img.setAttribute('crossOrigin', 'anonymous');
    }

    const selectposts = (id) => {
        const returnPost = currentData.filter(post => post.data.id === id)
        setOpenPost(returnPost[0].data);
        setIsOpenDialog(true);
        postIsReaden(id)
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

    useEffect(() => {         
        if (data.length) {
            setData(data);   
        }
    },[data]);

    
    return (
        <>
            <HeaderPosts history={history} onClickHideContent={onClickHideContent} />
            
            <Content>
              
                {(fetching || currentData.length > 0) && (
                    <ListContainer
                        loading={fetching && page === 1}
                        totalItems={total}
                        fetchingMoreItems={fetching && page > defaultFilters.page}
                        onScrollBottomAction={getMoreItems}
                    >
                        {
                            currentData.map((post, index) => (
                                
                                <div key={post.data.id}  onClick={selectposts.bind(this, post.data.id)}>
                                    <div className={styles.flexPostSingle}>

                                        <img className={styles.thumbnail} src={post.data.thumbnail} alt={post.data.title} />
                                      
                                        <div className={styles.content}>
                                            <div className={styles.author}>
                                                <span className={ alreadyReaden.some(r => post.data.id === r) ? styles.unreadStatus : styles.readStatus}></span>

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
                                                
                                                <Button 
                                                    onClick={(e) => {
                                                        e.stopPropagation(); 
                                                        deletePost(post.data.id)}
                                                    }
                                                >
                                                    Dismiss Post
                                                </Button>

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
                    <div className={styles.postOpened} open={isOpenDialog} >

                        <div onClick={closeOpenDialog} className={styles.closeLink}>
                            <X  color="#888" size={23} />
                        </div>

                        <h2 className={styles.title}>{openPost.title}</h2>
                        {   
                            images.includes(extension(openPost.url)) 
                            ?
                                <>
                                    <img ref={inputEl}  src={openPost.url} id="myImg" alt={openPost.title} />
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            convertImgToCanvas(openPost.url)}
                                        }
                                    >
                                        <Button>
                                        <Download  color="green" size={14} />
                                            Download Image
                                        </Button>
                                    </div>
                                </>
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
