import { RouteObject } from 'react-router-dom';
import Layout from './components/layouts/Layout';

import MainPage from './pages/MainPage';

const routes:RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <MainPage /> },
            { path: '*', element: <div>Not Found Page</div>}
        ]
    }
]

export default routes;