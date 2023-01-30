import { RouteObject } from 'react-router-dom';
import Layout from './components/layouts/Layout';

import MainPage from './pages/MainPage';
import TodoPage from './pages/TodoPage';

const routes:RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <MainPage /> },
            { path: 'todo', element: <TodoPage /> },
            { path: '*', element: <div>Not Found Page</div>}
        ]
    }
]

export default routes;