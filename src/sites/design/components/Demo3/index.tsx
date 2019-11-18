import React, {FC} from 'react';
import {Minister} from './Minister';

const client: FC = () => {
    const m = new Minister();
    return (
        <div onClick={() => m.start()}>start</div>
    );
};

export default client;