import React, { memo, useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styles from "./header.module.scss";
import Switch from '@material-ui/core/Switch';
import { setThemeWeb } from '../../../app/actions/config';
import { themeSelector } from '../../../app/selectors/config';
import { useSelector, useDispatch } from 'react-redux';
import { Moon, Sun } from 'react-feather';

const Header = ({
    config: {
        title: _title,
        subtitle: _subTitle
    },
    changeConfigChildRoute,
    changeHomeTitleAndDescription,
    innerRoutes,
    location
}) => {
    const selectedThemeValue = useSelector(themeSelector);

    const matchRoute = useRouteMatch(location.pathname);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [subTitle, setSubtitle] = useState('');
    const [theme, setTheme] = React.useState({
        light: true,
        dark: false,
    });

    const handleChange = newTheme => event => {
        setTheme({ ...theme, [newTheme]: event.target.checked });
        dispatch(setThemeWeb(newTheme))
    };

    const themeChecked = selectedThemeValue === 'dark' ? 'light' : 'dark'


    const isCurrentRoute =
        (path, exact = false) =>
            exact ? matchRoute.path === path : matchRoute.path.includes(path) || String(path).includes(matchRoute.path);

    useEffect(() => {
        innerRoutes.some(route => {

            if (isCurrentRoute(route.path)) {

                changeConfigChildRoute(route);

                const child = route.innerRoutes.find(({ path }) => isCurrentRoute(path, true));

                setTitle(child && String(child.title.key).length ? `${route.title.key} / ${child.title.key}` : route.title.key);
                setSubtitle(child && String(child.subTitle.key).length ? child.subTitle.key : route.subTitle.key);

                return true;
            }

            return false;
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, innerRoutes, changeConfigChildRoute]);

    useEffect(() => {
        return () => {
            changeHomeTitleAndDescription();
        }
    }, [changeHomeTitleAndDescription]);

    useEffect(() => {
        window.onbeforeunload = () => {
            changeHomeTitleAndDescription();
        };
    }, [changeHomeTitleAndDescription]);

    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.titleContent}>
                    <span className={styles.title}>{_title || title}</span>
                </div>

                <span className={styles.subTitle}>{_subTitle || subTitle}</span>
            </div>
            <div className={styles.divRow}>
                { 
                selectedThemeValue === 'dark' 
                ?   <div className={`${styles.moon}`}>
                        <Moon  color="lightblue" size={23} />
                    </div>
                :
                   <div className={`${styles.moon}`}>
                        <Sun color="darkorange" size={21} />
                    </div>
                }
                <Switch
                    checked={themeChecked === "light" ? true : false}
                    onChange={handleChange(themeChecked)}
                    value={selectedThemeValue}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>

        </div>
    )
}

export default memo(Header);