import React, { FC, useState, useCallback, useEffect } from 'react';
import useEventListener from '../../hooks/use-event-listener';
import B from '../../components/B';
import './index.less';

const ReactChildrenMethods: FC = () => {
    const [text, setText] = useState('');
    const children = [[1, 2], [3, 4, 5], [6, [7, 8, [9]]]];
    const childrenEl = React.Children.map(children, (value, index) => {
        return (
            <li key={'a'+ index}>{value}</li>
        );
    });
    // console.log(React.Children.toArray(children));
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
    const [leftList, setLeftList] = useState<JSX.Element[]>([]);
    const [rightList, setRightList] = useState<JSX.Element[]>([]);
    const [incrementList, setIncrementList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [shouldLoad, setShouldLoad] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchEvent = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('1111');
            }, 2000);
        });
    };

    useEffect(() => {
        console.log('3')
        !hasMore && setLoading(false);
    }, [hasMore]);

    useEffect(() => {
        console.log('1');
        const leftIncList: JSX.Element[] = [];
        const rightIncList: JSX.Element[] = [];
        const len = incrementList.length;

        if (len === 0) {
            return;
        }

        for (let index = 0; index < len; index++) {
            const contentFeed = (
                <div key={incrementList[index]}>{incrementList[index]}</div>
            );
            index % 2 === 1
                ? rightIncList.push(contentFeed)
                : leftIncList.push(contentFeed);
        }

        setLeftList(prevLeftList => [
            ...prevLeftList,
            ...leftIncList
        ]);
        setRightList(prevRightList => [
            ...prevRightList,
            ...rightIncList
        ]);
    }, [incrementList]);

    useEffect(() => {
        console.log('2');
        if (shouldLoad) {
            fetchEvent().then(() => {
                let a = Array.from({ length: 10 }).map(_ => Math.random());
                setIncrementList(a);
                setShouldLoad(false);
            });
        }
    }, [shouldLoad]);

    // Add event listener using our hook
    // useEventListener('mousemove', handler);

    return (
        <div>
            <B text={text} />
            <button onClick={() => setShouldLoad(true)}>add</button>
            <ul>
                {
                    leftList
                }
            </ul>
            <ul>
                {
                    rightList
                }
            </ul>
            {loading && <div className='animate'></div>}
            <div onClick={() => setText(String(Math.random()))}>click</div>
            {/* {childrenEl}
            {counts}
            <div className='bg'>
                <div className='mask-demo'></div>
            </div>
            The mouse position is ({coords.x}, {coords.y}) */}
        </div>
    );
};

export default ReactChildrenMethods;