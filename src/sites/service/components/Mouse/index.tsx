import React, { MouseEvent, ReactElement } from 'react';

export type MouseType = {
    x: number;
    y: number;
};

export interface MouseProps {
    render: (value: any) => ReactElement
};

export default class Mouse extends React.PureComponent<MouseProps, MouseType> {
    state = {
        x: 0,
        y: 0
    };

    constructor(props: MouseProps) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event: MouseEvent) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}