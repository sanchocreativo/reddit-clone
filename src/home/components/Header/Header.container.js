import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getConfigSelector } from '../../selectors/config';
import { changeConfigChildRoute, changeHomeTitleAndDescription } from '../../actions/config';

import Header from './Header';

const mapStateToProps = createStructuredSelector({ config: getConfigSelector });

const mapDispatchToProps = {
    changeConfigChildRoute,
    changeHomeTitleAndDescription
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);