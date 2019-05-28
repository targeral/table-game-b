import React, { useState, FormEvent, FC }from 'react';
import Routers from './router';
import pages from './pages';

import './index.less';

const App = () => {
    return (
        <Routers pages={pages} />
    );
};

export default React.memo(App);
