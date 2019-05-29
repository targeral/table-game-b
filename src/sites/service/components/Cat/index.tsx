import React from 'react';
import { MouseType } from '../Mouse';

export interface CatProps {
    mouse: MouseType
};

export default class Cat extends React.Component<CatProps> {
    constructor(props: CatProps) {
        super(props);
    }
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{ width: '50px', height: '50px', background: 'red', position: 'absolute', left: mouse.x, top: mouse.y }}></div>
        );
    }
}