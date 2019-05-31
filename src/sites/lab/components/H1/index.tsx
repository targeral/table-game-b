import React, { FC } from 'react';

interface H1Props {
    // opacity: any;
    style: any;
};

const HH1: FC<H1Props> = (props: H1Props) => {
    console.log(props)
    return (
        <header style={props.style}>
            <p>111</p>
        </header>
    );
};

export default HH1;