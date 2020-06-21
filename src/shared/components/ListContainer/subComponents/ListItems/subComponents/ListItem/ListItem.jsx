import React, { memo } from 'react';
import styles from './listItem.module.scss';
import { motion} from "framer-motion"

const ListItem = ({ children, className, ...resp }) =>{
  

    return(
    <div className={styles.wrapper}>
        <motion.div 
            className={`${className} ${styles.listItem}`} 
            {...resp}   
            initial={{ opacity: 0, y: 0 }}          
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: .5 }}
        >
            {children}
        </motion.div>
        <hr />
    </div>
    )
}
export default memo(ListItem);