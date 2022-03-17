import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Sobre from './pages/Sobre';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; // continua no AppRoute.js