import React, {FC, useState, useEffect, useMemo, useCallback} from 'react';
import Calculator from './Calculator';

const InterpretorComponent: FC = () => {
    enum STATE {
        START,
        INPUT_EXPRESSINO,
        INPUT_PARAMS,
        RUN,
        RESULT,
        OVER
    };
    const getMap = (str: string) => {
        const map = new Map<string, number>();
        for (let char of str) {
            if (char != '+' && char != '-' && !map.has(str)) {
                map.set(char, 0);
            }
        }
        return map;
    };
    const [state, setState] = useState(STATE.START);
    const [expression, setExpression] = useState('');
    const [expressionMap, setExpressionMap] = useState(new Map<string, number>());
    const [result, setResult] = useState<string>('');

    const getMapMome = useCallback(() => {
        setExpressionMap(getMap(expression));
    }, [expression]);
    const calculate = useCallback(() => {
        const cal: Calculator = new Calculator(expression);
        setResult(`运算结果：${cal.run(expressionMap)}`);
        setState(STATE.RESULT);
    }, [expressionMap]);

    const init = () => {
        setState(STATE.START);
        setExpression('');
        setExpressionMap(new Map<string, number>());
        setResult('');
    };
    
    return (
        <div>
            {
                state === STATE.START && (
                    <div onClick={() => setState(STATE.INPUT_EXPRESSINO)}>start</div>
                )
            }
            {
                state === STATE.INPUT_EXPRESSINO && (
                    <div>
                        请输入公式：<input type="text" value={expression} onChange={(e) => setExpression(e.target.value)} />
                        <button onClick={() => {
                            getMapMome();
                            setState(STATE.INPUT_PARAMS);
                        }}>确认</button>
                    </div>
                )
            }
            {
                state === STATE.INPUT_PARAMS && (
                    <div>
                        请输入参数：
                        <ul>
                            {
                                Array.from(expressionMap).map(([key]) => {
                                    return (
                                        <li key={key}>
                                            <label>
                                                {key}: <input type="text" onChange={(e) => expressionMap.set(key, +e.target.value) } />
                                            </label>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <button onClick={() => setState(STATE.RUN)}>确定</button>
                    </div>
                )   
            }
            {
                state === STATE.RUN && (
                    <button onClick={() => calculate()}>运算</button>
                )
            }
            {
                state === STATE.RESULT && (
                    <div>{result}</div>
                )
            }
            {
                state === STATE.OVER && (
                    <div onClick={() => init()}>重新开始</div>
                )
            }
        </div>
    );
};

export default InterpretorComponent;