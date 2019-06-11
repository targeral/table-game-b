import { Pages } from '../router';
import ReactSpring from './React-Spring';
import ReactChildrenMethods from './React-Children-Methods';

const NOOPCONFIG = {};

const pages: Pages = [
    // ['/', ReactSpring, NOOPCONFIG],
    ['/', ReactChildrenMethods, NOOPCONFIG]
];

export default pages;
