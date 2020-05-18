import { lazy } from "react";
import posts from "../posts/routes";

const EntryPoint = lazy(() => import(/* webpackChunkName: "home" */ './components/EntryPoint'));

export const innerRoutes = [
    posts
];

const home = {
    path: '/',
    Component: EntryPoint,
    exact: false,
    innerRoutes: [...innerRoutes]
};

export default home;