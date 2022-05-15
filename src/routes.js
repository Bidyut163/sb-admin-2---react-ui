import Dashboard from './components/admin/Dashboard';
import Buttons from './components/admin/Buttons';
import Cards from './components/admin/Cards';
import Colors from './components/admin/Colors';
import Borders from './components/admin/Borders';
import Animations from './components/admin/Animations';
import Others from './components/admin/Others';
import Charts from './components/admin/Charts';
import Table from './components/admin/Table';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    {
        path: '/admin/dashboard',
        exact: true,
        name: 'Dasbboard',
        component: Dashboard,
    },
    {
        path: '/admin/buttons',
        exact: true,
        name: 'Buttons',
        component: Buttons,
    },
    {
        path: '/admin/cards',
        exact: true,
        name: 'Cards',
        component: Cards,
    },
    {
        path: '/admin/colors',
        exact: true,
        name: 'Colors',
        component: Colors,
    },
    {
        path: '/admin/borders',
        exact: true,
        name: 'Borders',
        component: Borders,
    },
    {
        path: '/admin/animations',
        exact: true,
        name: 'Animations',
        component: Animations,
    },
    {
        path: '/admin/others',
        exact: true,
        name: 'Others',
        component: Others,
    },
    {
        path: '/admin/charts',
        exact: true,
        name: 'Charts',
        component: Charts,
    },
    {
        path: '/admin/tables',
        exact: true,
        name: 'Table',
        component: Table,
    },
];

export default routes;
