import React, { memo, useState } from 'react';
import SkeletonText from '../../../SkeletonText/SkeletonText';
import ListItems from '../ListItems';
import { buildArrayLength } from '../../../../helpers/commons';

const ListItemSkeleton = ({ skeletonRow, skeletonColumn, customSkeleton }) => {
    const [_skeletonColumn] = useState(buildArrayLength(skeletonColumn));
    const [_skeletonRow] = useState(buildArrayLength(skeletonRow));

    return (
        <div >
            {
                <ListItems
                    listItems={
                        _skeletonRow.map((child, i) =>
                            <div>
                                {
                                    !customSkeleton ?
                                        _skeletonColumn.map((childRow, x) => <SkeletonText key={`${i}-${x}`} />)
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