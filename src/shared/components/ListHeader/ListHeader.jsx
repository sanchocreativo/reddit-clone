import React, { memo } from 'react';
import ItemHeader from './subComponents/ItemHeader';
import styles from './listHeader.module.scss';

const ListHeader = ({ children, className }) =>
    <div className={`${className} ${styles.listHeader}`}>

        {
            Array.isArray(children) ?
                children.map((child, i) =>
                    child ?
                        <ItemHeader key={i} {...child.props}> {child} </ItemHeader>
                        : null
                )
                : <ItemHeader {...children.props}> {children} </ItemHeader>
        }
    </div>

export default memo(ListHeader);