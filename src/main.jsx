import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import {Signup , Home , AddPost , AllPost , EditPost , Login , Post} from "./pages";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/',
    element : < App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/login',
        element : <Login />
      },
      {
        path : '/signup',
        element : <Signup />
      },
      {
        path : '/add-post',
        element : <AddPost />
      },
      {
        path : '/all-posts',
        element : <AllPost />
      },
      {
        path : '/edit-post/:slug',
        element : <EditPost />
      },
      {
        path : '/post/:slug',
        element : <Post />
      },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
