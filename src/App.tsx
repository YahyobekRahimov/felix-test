import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  );
}

export default App;
