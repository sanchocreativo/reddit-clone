import React, { memo } from 'react';
import ListItem from '../ListItem';
import Loader from 'react-loader-spinner';
import { scrolly } from '../../../../../../helpers/commons';
import styles from './scrolly.module.scss';

const ListItems = ({ children, className, listItems, fetchingMoreItems, totalItems, onScrollBottomAction = () => { } }) => {

    
    const getMoreItems = () => {
        if (typeof fetchingMoreItems !== "undefined" && !fetchingMoreItems && listItems.length < totalItems) {
            onScrollBottomAction();
        }
    }

    return (
        <div className={className} onScroll={scrolly.bind(this, getMoreItems)}>
            
            {children}
            {
                fetchingMoreItems &&
                <ListItem className={styles.loader}>
                    <Loader type="ThreeDots" />
                </ListItem>
            }
        </div>
    );
}




export default memo(ListItems);