import React, {
    FC, ReactElement,
    useRef, useEffect, useCallback, useState
} from 'react';

import './index.less';

interface IMockScroll {
    moveCounts?: number;
    children: ReactElement | ReactElement[];
};

interface IStyle {
    transform: string;
};

interface ITest {
    [index: string]: [Function, Object][];
}

const MockScroll: FC<IMockScroll> = ({
    children,
    moveCounts = 200
}: IMockScroll) => {
    const prefixCls = 'mock-scroll';
    const initStyle: IStyle = {
        transform: 'none'
    };
    const [scrollTop, setScollTop] = useState<number>(0);
    const [dragStart, setDragStart] = useState<number | null>(0);
    const [percentage, setPercentage] = useState<number>(0);
    const [Y, setY] = useState<number>(0);
    // const [style, setStyle] = useState<IStyle>(initStyle);
    const scrollRef = useRef<HTMLDivElement>(null);
    // const touchMoveHandle = () => {
    //     console.log(el.scrollTop);
    // };
    // console.log(el);

    const onTouchStart = (event: TouchEvent) => {
        const target = event.touches[0];
        const dragStart: number = target.clientY;
        setDragStart(dragStart);
    };

    const onTouchMove = (event: TouchEvent) => {
        const target = event.touches[0];
        const y = target.clientY;
        const percentage = (dragStart as number - y) / (scrollRef.current as HTMLDivElement).clientHeight;
        const translateY = -percentage * moveCounts;
        setPercentage(percentage);
        setY(scrollTop + translateY);
    };

    const onTouchEnd = (event: TouchEvent) => {
        if (percentage === 0) {
            return ;
        }
        setDragStart(null);
        setPercentage(0);
        setScollTop(Y);
    };

    useEffect(
        () => {
            const scrollEl: HTMLDivElement = scrollRef.current as HTMLDivElement;
            scrollEl.addEventListener('touchstart', onTouchStart);
            scrollEl.addEventListener('touchmove', onTouchMove);
            scrollEl.addEventListener('touchend', onTouchEnd);

            return () => {
                scrollEl.removeEventListener('touchstart', onTouchStart);
                scrollEl.removeEventListener('touchmove', onTouchMove);
                scrollEl.removeEventListener('touchend', onTouchEnd);
            };
        }
    );

    return (
        <div
            className={prefixCls}
            ref={scrollRef}
            // onTouchStart={onTouchStart}
            // onTouchMove={onTouchMove}
            // onTouchEnd={onTouchEnd}
        >
            <div
                style={{
                    transform: `translate3d(0, ${Y}px, 0)`
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MockScroll;