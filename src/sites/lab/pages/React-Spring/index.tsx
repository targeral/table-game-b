import React, { FC, useState } from 'react';
import { useGesture } from 'react-with-gesture';
import { useSpring, animated, InterpolationConfig} from 'react-spring';
import HH1 from '../../components/H1';

import './index.less';


const ReactSpring: FC = () => {
    // const props = useSpring({opacity: 1, from: { opacity: 0 }});
    const [bind, { delta, down }] = useGesture();
    return (
        <div {...bind()}>
            {down ? 'down' : 'nodown'}
        </div>
    );
};

export default ReactSpring;