import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Link } from 'react-router-dom-old'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [...dashboardRoutes, ...materialRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Link to="dashboard/default" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
