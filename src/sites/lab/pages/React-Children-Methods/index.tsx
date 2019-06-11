import React, { FC, useState, useCallback } from 'react';
import useEventListener from '../../hooks/use-event-listener';
import './index.less';

const ReactChildrenMethods: FC = () => {
    const children = [[1, 2], [3, 4, 5], [6, [7, 8, [9]]]];
    const childrenEl = React.Children.map(children, (value, index) => {
        return (
            <li key={'a'+ index}>{value}</li>
        );
    });
    console.log(React.Children.toArray(children));
    const counts = React.Children.count(children);

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    // Event handler utilizing useCallback ...
    // ... so that reference never changes.
    const handler = useCallback(
        ({ clientX, clientY }) => {
            // Update coordinates
            setCoords({ x: clientX, y: clientY });
        },
        [setCoords]
    );

    // Add event listener using our hook
    useEventListener('mousemove', handler);

    return (
        <div>
            {childrenEl}
            {counts}
            <div className='bg'>
                <div className='mask-demo'></div>
            </div>
            The mouse position is ({coords.x}, {coords.y})
        </div>
    );
};

export default ReactChildrenMethods;