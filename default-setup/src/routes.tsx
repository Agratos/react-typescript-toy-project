import { RouteObject } from 'react-router-dom';
import Layout from './components/layouts/Layout';

const routes:RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <div>Main Page</div> },
            { path: '*', element: <div>Not Found Page</div>}
        ]
    }
]

export default routes;