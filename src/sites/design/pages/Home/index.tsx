import React, { useState, FormEvent, MouseEvent, FC } from 'react';
import Client from '../../components/client';
import CarClient from '../../components/Car-Client';
import Demo1 from '../../components/Demo1';
import Demo2 from '../../components/Demo2';

interface HomeProps {
    query?: string;
};

const Home: FC<HomeProps> = (props: HomeProps) => {
    return (
        <div>
            <Client></Client>
            <CarClient></CarClient>
            <Demo1></Demo1>
            <Demo2></Demo2>
        </div>
    );
};

export default Home;
