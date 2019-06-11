import * as React from 'react';
import {HashRouter as Router, Route, RouteProps} from 'react-router-dom';

export type Page = [string, React.ComponentType, RouteProps];
export type Pages = Page[];

export interface RoutersProps {
    pages: Pages;
}

const BASENAME = '/design';
const Routers = (props: RoutersProps): React.ReactElement => {
    return (
        <Router basename={BASENAME}>
            {
                props.pages.map(([path, component, props = {}]: Page) => (
                    <Route 
                        key={path}
                        {...props}
                        path={path}
                        component={component}
                    />
                ))
            }
        </Router>
    );
}

export default Routers;
