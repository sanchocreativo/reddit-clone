import { createSelector } from 'reselect';

export const getPostsAccesor = state => state.posts;


export const postsSelector = createSelector(getPostsAccesor, posts => posts);