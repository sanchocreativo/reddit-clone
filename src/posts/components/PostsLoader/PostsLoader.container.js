import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getPostsRequest,  setPosts  } from '../../actions/posts';

import PostsLoader from './PostsLoader';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
    getPostsRequest,
    setPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsLoader);