import React, { useState, FC, FormEvent } from 'react';



const Dog: FC = () => {
    const [name, setName] = useState('tom');
    const [inputValue, setInputValue] = useState(name);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };

    const submit = () => {
        setName(inputValue);
    }

    return (
        <div>
            <div>this is dog, my name is {name}</div>
            <p>
                you can change my name, do you want call me:
                <input type="text" value={inputValue} onChange={(onChange)}/>
            </p>
            <button onClick={submit}></button>
        </div>
    );
};

export default Dog;