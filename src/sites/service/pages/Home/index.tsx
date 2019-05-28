import React, { useState, FormEvent, MouseEvent, FC } from 'react';

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
            <header>
                <h1>{title}</h1>
            </header>
            <input
                type="text"
                value={inputValue}
                onChange={onChange}
            />
            <button onClick={onClick}>change</button>
        </div>
    );
};

export default Home;
