import { createSelector } from 'reselect';

export const getPostsReadenAccesor = state => state.readStatus.arr;


export const postsReadenSelector = createSelector(getPostsReadenAccesor, posts => posts);