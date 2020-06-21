import React, { memo} from 'react';
import ListItem from './subComponents/ListItem';
import Scrolly from './subComponents/Scrolly';
import {  AnimatePresence } from "framer-motion"

const ListItems = ({ listItems, className, ...props }) => {
 
    const list = {
        visible: {
            opacity: 1,
            transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 1,
            transition: {
            when: "afterChildren",
            },
        },
    }
    
    return (
        <Scrolly className={className} listItems={listItems}  {...props}>
            <AnimatePresence>
            {
                Array.isArray(listItems) ?
                    listItems.map((item, i) => (
                            <ListItem
                                key={item.key ? item.key : i}
                                {...item.props}
                            >
                                {item.props.children}
                            </ListItem>

                        ))
                    : <ListItem {...listItems.props}> {listItems} </ListItem>
            }
            </AnimatePresence>
        </Scrolly>
    );
}




export default memo(ListItems);