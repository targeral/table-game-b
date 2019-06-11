import React, { FC } from 'react';
import { Client } from './client';

const ClientView: FC = () => {
    let client: Client = new Client();
    return (
        <div onClick={() => client.start()}>start</div>
    );
};

export default ClientView;