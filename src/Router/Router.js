import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import SingleBlog from "../pages/Blogs/SingleBlog/SingleBlog";
import Campaign from "../pages/Campaign/Campaign";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardActivities from "../pages/Dashboard/DashboardActivities/DashboardActivities";
import DashboardBankDonation from "../pages/Dashboard/DashboardBankDonation/DashboardBankDonation";
import DashboardDonors from "../pages/Dashboard/DashboardDonors/DashboardDonors";
import DashboardOverview from "../pages/Dashboard/DashboardOverview/DashboardOverview";
import DashboardUser from "../pages/Dashboard/DashboardUser/DashboardUser";
import Donate from "../pages/donate/Donate";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import NgoSignup from "../pages/NgoSignup/NgoSignup";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/details/:id",
        element: <SingleBlog></SingleBlog>,
        loader: ({ params }) =>
          fetch(
            `https://code-kids-project-server.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/ngosignup",
        element: <NgoSignup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      // {path:"overview",element:<DashboardOverview/>},
      { path: "user", element: <DashboardUser /> },
      { path: "activity", element: <DashboardActivities /> },
      { path: "bankdonors", element: <DashboardBankDonation /> },
      { path: "donors", element: <DashboardDonors /> },
      { path: "overview", element: <DashboardOverview /> },
    ],
  },
]);
