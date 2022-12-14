import { RouteObject } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Papago from './components/Papago';

const routes:RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Papago /> },
            { path: '*', element: <div>Not Found Page</div>}
        ]
    }
]

export default routes;