import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import ChangeTheme from './subComponents/ChangeTheme';

const Control = withRouter(({ children, history }) => {
    return (
        <>
            <ChangeTheme />
            {children}
        </>
    );
});

export default memo(Control);
