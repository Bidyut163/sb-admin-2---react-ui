import React from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

import '../assets/admin/css/sb-admin-2.css';
// import '../assets/admin/vendor/jquery.min';
// import '../assets/admin/vendor/jquery-easing/jquery.easing.min';
// import '../assets/admin/js/sb-admin-2';

const MasterLayout = () => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MasterLayout;
