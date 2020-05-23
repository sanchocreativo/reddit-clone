import axios from 'axios';
import { redditDomain } from '../../app/conf';
import { makeQuery } from "../../shared/helpers/commons";

export const getPosts = (filters) =>
    axios({
        method: 'get',
        url: `${redditDomain}/top.json?${makeQuery(filters)}`,
        headers: {
            notCachedResponse: true
        },
    });