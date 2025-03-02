import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import { Projects } from "./pages/projects";
import { Services } from "./pages/services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>, // Wrap routes inside a common layout (e.g., Navbar, Footer)
      children: [
        { path: "", element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "services", element: <Services /> },
        // { path: "*", element: <NotFound /> }, // 404 Page
      ],
    },
  ]);
  
  export default router;