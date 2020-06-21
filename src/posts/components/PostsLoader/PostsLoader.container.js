import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getPostsRequest,  setPosts  } from '../../actions/posts';
import { postIsReaden  } from '../../../readStatus/actions/readStatus';

import PostsLoader from './PostsLoader';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
    getPostsRequest,
    setPosts,
    postIsReaden
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsLoader);