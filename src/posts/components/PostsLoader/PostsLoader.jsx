import React, { memo, useEffect, useState} from 'react';
import styles from './postsLoader.module.scss';
import HeaderPosts from '../HeaderPosts';
import ListHeader from '../../../shared/components/ListHeader';
import Content from '../../../shared/components/Content';
import ListNotFound from '../../../shared/components/ListNotFound';
import ListContainer from '../../../shared/components/ListContainer';
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from '../../actions/posts'
import { postsSelector } from "../../selectors/posts"
import moment from 'moment';

const defaultFilters = {
    limit: 10
}

const PostsLoader = ({ history }) => {
    const dispatch = useDispatch();
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [notification, setNotification] = useState({});
    const { fetching, data } = useSelector(postsSelector);

    const selectposts = (index) => {
        setNotification(data[index]["data"]);
        setIsOpenDialog(true);
    }

    const closeOpenDialog = () => {
        setNotification({});
        setIsOpenDialog(false);
    }

    useEffect(() => {
        dispatch(getPostsRequest({ ...defaultFilters }));
    }, [dispatch]);


    return (
        <>
            <HeaderPosts history={history} />

            <Content>
                <ListHeader>
                    <div className={styles.f20}>Reddit Posts</div>
                    <div className={styles.f55}></div>
                    <div className={styles.f55}></div>

                </ListHeader>

                {(fetching || data.length > 0) && (
                    <ListContainer
                        loading={fetching}
                        totalItems={"50"}
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

                        {notification.title}

                        {notification.url &&
                            <img src={notification.url} alt={notification.title} />
                        }
                        
                    </div>
                }

                {!fetching && data.length === 0 && <ListNotFound />}
            </Content>
        </>
    );
};

export default memo(PostsLoader);
