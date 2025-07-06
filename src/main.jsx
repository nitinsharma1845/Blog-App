import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import {
  Signup,
  Home,
  AddPost,
  AllPost,
  EditPost,
  Login,
  Post,
  Profile,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout } from "./components";
import { Account } from "appwrite";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout>
//             <Login />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/signup",
//        element: (
//           <AuthLayout>
//             <Signup />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/add-post",
//        element: (
//           <AuthLayout>
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <AuthLayout>
//             <AllPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <AuthLayout>
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/profile",
//         element: (
//           <AuthLayout>
//             <Profile />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: (
//           <AuthLayout>
//             <Post />
//           </AuthLayout>
//         ),
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/profile",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Profile />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
