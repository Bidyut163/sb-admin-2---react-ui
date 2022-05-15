import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/frontend/Home';
import Login from './components/frontend/Login';
import Register from './components/frontend/Register';
import ForgotPassword from './components/frontend/ForgotPassword';
import MasterLayout from './layouts/admin/MasterLayout';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route
                        exact
                        path="/forgot-password"
                        component={ForgotPassword}
                    />
                    <Route
                        path="/admin"
                        name="Admin"
                        render={(props) => <MasterLayout {...props} />}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
