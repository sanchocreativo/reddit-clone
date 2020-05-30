import React, { memo, useState } from 'react';
import SkeletonText from '../../../SkeletonText/SkeletonText';
import ListItems from '../ListItems';
import { buildArrayLength } from '../../../../helpers/commons';
import styles from './listItemSkeleton.module.scss';

const ListItemSkeleton = ({ skeletonRow, skeletonColumn, customSkeleton }) => {
    const [_skeletonColumn] = useState(buildArrayLength(skeletonColumn));
    const [_skeletonRow] = useState(buildArrayLength(skeletonRow));

    return (
        <div className={styles.listContainer}>
            {
                <ListItems
                    listItems={
                        _skeletonRow.map((child, i) =>
                            <div >
                                {
                                    !customSkeleton ?
                                        _skeletonColumn.map((childRow, x) => 
                                        <div className={styles.divRow}  key={`${i}-${x}`}>

                                            <SkeletonText  height="70px" width="80px" />

                                            <div className={`${styles.divColumn} ${styles.skeletonPost}`}>
                                                <SkeletonText  height="15px" width="230px" />
                                                <SkeletonText  height="40px" width="230px" />
                                                <SkeletonText  height="15px"  />
                                            </div>
                                        </div>
                                        
                                        )
                                        : customSkeleton

                                }
                            </div>
                        )
                    }
                />

            }
        </div>
    )
}

export default memo(ListItemSkeleton);