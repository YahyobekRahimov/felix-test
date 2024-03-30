import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material";

const theme = extendTheme({
  cssVarPrefix: "my-vars",
});

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
      <CssVarsProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </CssVarsProvider>
    </Layout>
  );
}

export default App;
