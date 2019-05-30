import React, { useState, FC, FormEvent } from 'react';
import { computeAsyncExpiration } from './task';

const ExpirationTimeLab: FC = () => {
    const [expirationTimes, setExpirationTimes] = useState<number[][]>([]);
    const [rangeStart, setRangeStart] = useState<number>(0);
    const [rangeEnd, setRangeEnd] = useState<number>(0);

    const validValueIsNumber = (
        callback: (value: number) => any
    ) => {
        return (value: number) => {
            !Number.isNaN(value) && callback(value);
        }
    };
    const handleStartRangeInputChange = (e: FormEvent<HTMLInputElement>) => {
        validValueIsNumber(
            setRangeStart
        )(+e.currentTarget.value);
    };
    const handleEndRangeInputChange = (e: FormEvent<HTMLInputElement>) => {
        validValueIsNumber(
            setRangeEnd
        )(+e.currentTarget.value);
    };
    const renderExpirationTime = () => {
        let times = [];
        for(let i = rangeStart; i <= rangeEnd; i++) {
            times.push(i);
        }
        setExpirationTimes(
            times.map(time => ([time, computeAsyncExpiration(time)]))
        );
    };

    return (
        <div>
            <button onClick={
                () => renderExpirationTime()
            }>update</button>
            <input type="text" value={rangeStart} onChange={handleStartRangeInputChange} />
            <input type="text" value={rangeEnd} onChange={handleEndRangeInputChange} />
            <ul>
                {
                    expirationTimes.map(time => (
                        <li>{time[0]} - {time[1]}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExpirationTimeLab;