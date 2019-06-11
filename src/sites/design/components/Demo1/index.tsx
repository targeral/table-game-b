import React, { FC } from 'react';
import { Client } from './main';

const Demo1: FC = () => {
    const client = new Client();
    return (
        <div onClick={() => client.start()}>start</div>
    );
};

export default Demo1;