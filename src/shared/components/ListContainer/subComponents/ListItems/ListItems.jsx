import React, { memo } from 'react';
import ListItem from './subComponents/ListItem';
import Scrolly from './subComponents/Scrolly';

const ListItems = ({ listItems, className, ...props }) => {
    
    return (
        <Scrolly className={className} listItems={listItems}  {...props}>
            {
                Array.isArray(listItems) ?
                    listItems.map((item, i) =>
                        <ListItem
                            key={i}
                            {...item.props}
                        >
                            {item.props.children}
                        </ListItem>)
                    : <ListItem {...listItems.props}> {listItems} </ListItem>
            }
        </Scrolly>
    );
}




export default memo(ListItems);