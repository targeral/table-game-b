import React, { FC } from 'react';
import { Client } from './car';

const CarClient: FC = () => {
    const client = new Client();
    return (
        <section>
            <h2>car</h2>
            <div onClick={() => client.start()}>start</div>
        </section>
    );
};

export default CarClient;