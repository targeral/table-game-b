import React, { useState, useRef, FormEvent, MouseEvent, FC, Ref, MutableRefObject, RefObject} from 'react';
// import Client from '../../components/client';
// import CarClient from '../../components/Car-Client';
// import Demo1 from '../../components/Demo1';
// import Demo2 from '../../components/Demo2';
// import Demo3 from '../../components/Demo3';
// import MockScroll from '../../components/MockScroll';
// import NW from '../../components/NvWa';
// import IteratorMode from '../../components/IteratorMode';
// import Interpretor from '../../components/Interpretor';


interface HomeProps {
    query?: string;
};

const Home: FC<HomeProps> = (props: HomeProps) => {
    return (
        <div>
            {/* <NW></NW> */}
            {/* <IteratorMode></IteratorMode> */}
            {/* <Interpretor></Interpretor> */}
        </div>
        // <MockScroll>
        //     <Client></Client>
        //     <CarClient></CarClient>
        //     <Demo1></Demo1>
        //     <Demo2></Demo2>
        //     <Demo3></Demo3>
        //     <Client></Client>
        //     <CarClient></CarClient>
        //     <Demo1></Demo1>
        //     <Demo2></Demo2>
        //     <Demo3></Demo3>
        //     <Client></Client>
        //     <CarClient></CarClient>
        //     <Demo1></Demo1>
        //     <Demo2></Demo2>
        //     <Demo3></Demo3>
        // </MockScroll>
    );
};

export default Home;
