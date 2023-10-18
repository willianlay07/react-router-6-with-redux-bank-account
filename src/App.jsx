import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Posts, { loader as getPosts } from "./features/posts/Posts";
import IndividualPost, { loader as getEachPost } from "./features/posts/IndividualPost";
import Login from "./features/account/Login";
import Profile from "./features/account/Profile";
import Bank from "./features/account/Bank";

const App = () => {
    const router    = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/posts",
                    element: <Posts />,
                    loader: getPosts
                },
                {
                    path: "/posts/:id",
                    element: <IndividualPost />,
                    loader: getEachPost
                },
                {
                    path: "/auth/login",
                    element: <Login />
                },
                {
                    path: "/auth/profile",
                    element: <Profile />
                },
                {
                    path: "/auth/bank",
                    element: <Bank />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default App