import { Navigate, RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import TestErrors from "../../features/errors/TestError";
import App from "../layouts/App";
import LoginForm from "../users/LoginForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'activities/:id', element: <ActivityDetails/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
            {path: 'errors', element: <TestErrors/>},
            {path: 'not-found', element: <NotFound/>},
            {path: 'server-error', element: <ServerError/>},
            {path: '*', element: <Navigate replace to='/not-found'/>},
            {path: 'login', element: <LoginForm/>}
        ]
    }
]

export const router = createBrowserRouter(routes)