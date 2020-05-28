import { createSelector } from 'reselect';

export const getPostsAccesor = state => state.posts;

export const getTotalAccesor = state => state.posts;


export const postsSelector = createSelector(getPostsAccesor, posts => posts);