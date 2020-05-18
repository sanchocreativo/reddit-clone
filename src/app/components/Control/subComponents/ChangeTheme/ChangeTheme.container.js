import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { themeSelector } from '../../../../selectors/config';

import ChangeTheme from './ChangeTheme';

const mapStateToProps = createStructuredSelector({
    theme: themeSelector
});

export default connect(mapStateToProps)(ChangeTheme);