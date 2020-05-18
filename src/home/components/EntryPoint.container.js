import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeConfigChildRoute } from '../../actions/config';
import EntryPoint from './EntryPoint';

const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = {
    changeConfigChildRoute
};
export default connect(mapStateToProps, mapDispatchToProps)(EntryPoint);