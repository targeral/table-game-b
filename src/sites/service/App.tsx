import React, { useState, FormEvent, FC }from 'react';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Routers from './router';
import pages from './pages';

import './index.less';

const App = () => {
    return (
        <Routers pages={pages} />
    );
};

export default React.memo(App);
