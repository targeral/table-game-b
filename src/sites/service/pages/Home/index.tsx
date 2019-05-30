import React, { useState, FormEvent, MouseEvent, FC } from 'react';
import MouseTracker from '../../components/MouseTracker';
import ExpirationTimeLab from '../../components/ExpirationTime';

interface HomeProps {
    query?: string;
};

const Home: FC<HomeProps> = (props: HomeProps) => {
    const defaultValue = 'home';
    const [title, setTitle] = useState<string>(defaultValue);
    const [inputValue, setInputValue] = useState<string>(defaultValue);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        setTitle(inputValue);
    }

    return (
        <div>
            <ExpirationTimeLab></ExpirationTimeLab>
        </div>
    );
};

export default Home;
