import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setVersion } from '../../actions/config';
import { versionSelector } from '../../selectors/config';
import Control from './Control';

const mapStateToProps = createStructuredSelector({
    currentVersion: versionSelector
});

const mapDispatchToProps = {
    setVersion
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);