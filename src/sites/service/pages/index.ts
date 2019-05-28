import Home from './Home';
import Demo from './Demo';
import { Pages } from '../router';

const pages: Pages = [
    ['/', Home, {exact: true}],
    ['/demo', Demo, {}]
];

export default pages;
