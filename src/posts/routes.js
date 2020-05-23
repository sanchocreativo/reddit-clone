import { lazy } from "react";
import { postsSVG } from '../shared/helpers/icons';

const EntryPoint = lazy(() => import( /* webpackChunkName: "posts" */ './components/EntryPoint'));
const PostsLoader = lazy(() => import( /* webpackChunkName: "PostsLoader" */ './components/PostsLoader'));

export const defaultPath = '/posts';

export const innerRoutes = [
    {
        path: `${defaultPath}/`,
        Component: PostsLoader,
        exact: true,
        icon: postsSVG,
        title: {
            key: "posts",
            plural: false
        },
        subTitle: {
            key: 'posts',
            plural: false
        }
    },
];

const posts = {
    path: defaultPath,
    Component: EntryPoint,
    exact: false,
    icon: postsSVG,
    title: {
        key: 'posts',
        plural: false
    },
    subTitle: {
        key: 'posts_detail',
        plural: false
    },
    innerRoutes: innerRoutes
};

export default posts;
