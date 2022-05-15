import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import layout components
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

// import routes
import routes from '../../routes';

import '../../assets/admin/css/sb-admin-2.css';

const MasterLayout = () => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />

                    <Switch>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            );
                        })}
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MasterLayout;
