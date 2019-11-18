import React, {FC} from 'react';
import NvWa from './nvwa';

const Client:FC = () => {
    const nvwa = new NvWa();
    return (
        <div onClick={() => nvwa.start()}>
            start
        </div>  
    );
};

export default Client;