import * as React from 'react';
import {BrowserRouter as Router, Route, RouteProps} from 'react-router-dom';

export type Page = [string, React.ComponentType, RouteProps];
export type Pages = Page[];

export interface RoutersProps {
    pages: Pages;
}

const Routers = (props: RoutersProps): React.ReactElement => {
    return (
        <Router>
            {
                props.pages.map(([path, component, props = {}]) => (
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
