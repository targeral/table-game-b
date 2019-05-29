import React, {Component, MouseEvent} from 'react';
import Mouse, { MouseType } from '../Mouse';
import Cat from '../Cat';

export default class MouseTracker extends React.Component {
    renderCat(mouse: MouseType) {
        return <Cat mouse={mouse} />;
    }

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={this.renderCat} />
            </div>
        );
    }
}