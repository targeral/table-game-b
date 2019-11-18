import React, {FC, useCallback, useEffect, useRef} from 'react';

export interface IB {
    text: string;
}

const B: FC<IB> = (props: IB) => {
    const {text} = props;
    const ref = useRef();
    useEffect(() => {
        console.log(text);
    }, [text])
    return (
        <div>
            {text}
        </div>
    );
};

export default B;
