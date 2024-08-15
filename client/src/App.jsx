import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
    AddJob,
    Stats,
    AllJobs,
    Profile,
    Admin,
    EditJob,
} from './pages';

import { checkDefaultTheme } from './utils/common';
import { action as registerAction } from './pages/Register.utils';
import { action as loginAction } from './pages/Login.utils';
import { action as addJobAction } from './pages/AddJob.utils';
import { action as editJobAction } from './pages/EditJob.utils';
import { action as deleteJobAction } from './pages/DeleteJob.utils';
import { action as profileAction } from './pages/Profile.utils';
import { loader as dashboardLoader } from './pages/DashboardLayout.utils';
import { loader as allJobsLoader } from './pages/AllJobs.utils';
import { loader as editJobLoader } from './pages/EditJob.utils';
import { loader as adminLoader } from './pages/Admin.utils';
import { loader as statsLoader } from './pages/Stats.utils';

checkDefaultTheme();

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'register',
                element: <Register />,
                action: registerAction,
            },
            {
                path: 'login',
                element: <Login />,
                action: loginAction,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                loader: dashboardLoader,
                children: [
                    {
                        index: true,
                        element: <AddJob />,
                        action: addJobAction,
                    },
                    {
                        path: 'stats',
                        element: <Stats />,
                        loader: statsLoader,
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs />,
                        loader: allJobsLoader,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                        action: profileAction,
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                        loader: adminLoader,
                    },
                    {
                        path: 'edit-job/:id',
                        element: <EditJob />,
                        loader: editJobLoader,
                        action: editJobAction,
                    },
                    {
                        path: 'delete-job/:id',
                        action: deleteJobAction,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
