import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
    <LocaleProvider locale={zh_CN}>
        <App />
    </LocaleProvider>,
    document.getElementById('app')
)