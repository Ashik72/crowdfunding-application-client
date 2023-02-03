import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import SingleBlog from "../pages/Blogs/SingleBlog/SingleBlog";
import Campaign from "../pages/Campaign/Campaign";
import CampaignShow from "../pages/Campaign/CampaignShow/CampaignShow";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardActivities from "../pages/Dashboard/DashboardActivities/DashboardActivities";
import DashboardAdmin from "../pages/Dashboard/DashboardAdmin/DashboardAdmin";
import DashboardBankDonation from "../pages/Dashboard/DashboardBankDonation/DashboardBankDonation";
import DashboardBkashDonation from "../pages/Dashboard/DashboardBkashDonation/DashboardBkashDonation";
import DashboardDonors from "../pages/Dashboard/DashboardDonors/DashboardDonors";
import DashboardOverview from "../pages/Dashboard/DashboardOverview/DashboardOverview";
import DashboardPosts from "../pages/Dashboard/DashboardPosts/DashboardPosts";
import DashboardUser from "../pages/Dashboard/DashboardUser/DashboardUser";
import Donate from "../pages/donate/Donate";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import NgoSignup from "../pages/NgoSignup/NgoSignup";
import PartnerDetails from "../pages/PartnerDetails/PartnerDetails";
import Partners from "../pages/Partners/Partners";
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
        path: "/campaign",
        element: <Campaign></Campaign>,
      },
      {
        path: "/campaignshow",
        element: <CampaignShow></CampaignShow>,
      },

      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/ngosignup",
        element: <NgoSignup />,
      },
      {
        path: "/partners",
        element: <Partners></Partners>,
      },
      {
        path: "/partners/:id",
        element: <PartnerDetails></PartnerDetails>,
        loader: ({ params }) =>
          fetch(
            `https://crowdfunding-projects-server.vercel.app/ngoSignup/${params.id}`
          ),
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
      { path: "admin", element: <DashboardAdmin /> },
      { path: "posts", element: <DashboardPosts /> },
      { path: "bkash", element: <DashboardBkashDonation /> },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
