import { lazy } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import Home from '../pages/index';
import Mix from '../pages/how';
import CLI from '../pages/cli';
import How from '../pages/mix';
import Mixing from '../pages/mixing';

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [{
            path: '/', 
            element: <Home />
        }, {
            path: '/mix', 
            element: <Mix />
        }, {
            path: '/cli', 
            element: <CLI />
        }, {
            path: '/works', 
            element: <How />
        }, {
            path: '/mixing', 
            element: <Mixing />
        }]
    },
], {
    basename: '/'
});

export default router;