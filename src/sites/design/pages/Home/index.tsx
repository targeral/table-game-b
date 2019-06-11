import React, { useState, FormEvent, MouseEvent, FC } from 'react';
import Client from '../../components/client';
import CarClient from '../../components/Car-Client';
interface HomeProps {
    query?: string;
};

const Home: FC<HomeProps> = (props: HomeProps) => {
    return (
        <div>
            <Client></Client>
            <CarClient></CarClient>
        </div>
    );
};

export default Home;
