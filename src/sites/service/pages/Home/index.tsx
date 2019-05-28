import React, { useState, FormEvent, FC } from 'react';

interface HomeProps {};

const Home: FC<HomeProps> = (props: HomeProps) => {
    const defaultValue = 'home';
    const [title, setTitle] = useState<string>(defaultValue);
    const [inputValue, setInputValue] = useState<string>(defaultValue);
    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        setTitle(e.currentTarget.value);
    };

    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>
            <input
                type="text"
                value={inputValue}
                onChange={onChange}
            />
            <button>change</button>
        </div>
    );
};

export default Home;
