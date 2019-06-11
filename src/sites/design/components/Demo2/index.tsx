import React, { FC } from 'react';
import { Client } from './main';

const Demo2: FC = () => {
    const client = new Client();
    return (
        <div onClick={() => client.start()}>start</div>
    );
};

export default Demo2;