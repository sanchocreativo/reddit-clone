import { createSelector } from 'reselect';

export const getPostsAccesor = state => state.Posts;

export const postsSelector = createSelector(getPostsAccesor, Posts => Posts);