import { memo, useEffect } from 'react';

const ChangeTheme = ({ theme }) => {
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    return null;
};

export default memo(ChangeTheme);