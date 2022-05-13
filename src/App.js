import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MasterLayout from './layouts/MasterLayout';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/admin/dashboard"
                        component={MasterLayout}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
