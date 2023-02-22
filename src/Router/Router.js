import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

import Main from "../layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import SingleBlog from "../pages/Blogs/SingleBlog/SingleBlog";
import Campaign from "../pages/Campaign/Campaign";
import CampaignShow from "../pages/Campaign/CampaignShow/CampaignShow";
import Causes from "../pages/Causes/Causes";
import Bar from "../pages/Dashboard/Bar";
import Contacts from "../pages/Dashboard/Contacts";
import Dashboard from "../pages/Dashboard/Dashboard";
import FAQ from "../pages/Dashboard/Faq";
import Form from "../pages/Dashboard/Form";
import Geography from "../pages/Dashboard/Geography";
import Invoices from "../pages/Dashboard/Invoices";
import Line from "../pages/Dashboard/Line";
import Pie from "../pages/Dashboard/Pie";
import Team from "../pages/Dashboard/Team";

import Donate from "../pages/donate/Donate";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import NaturalDisaster from "../pages/NaturalDisaster/NaturalDisaster";
import NgoSignup from "../pages/NgoSignup/NgoSignup";
import OurEventDetails from "../pages/OurEvents/OurEventDetails/OurEventDetails";
import OurEvents from "../pages/OurEvents/OurEvents";
import PartnerDetails from "../pages/PartnerDetails/PartnerDetails";
import Partners from "../pages/Partners/Partners";
import Register from "../pages/Register/Register";
import VideoChat from "../pages/videoChat/VideoChat";
import Room from "../pages/videoChatComp/Room";
import PrivetRouter from "./PrivetRouter";

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
        element: (
          <PrivetRouter>
            <Campaign></Campaign>
          </PrivetRouter>
        ),
      },
      {
        path: "/campaignshow",
        element: <CampaignShow></CampaignShow>,
      },
      {
        path: "/videoChat",
        element: (
          <PrivetRouter>
            <VideoChat />
          </PrivetRouter>
        ),
      },
      {
        path: "/donate",
        element: (
          <PrivetRouter>
            <Donate />
          </PrivetRouter>
        ),
      },
      {
        path: "/ngosignup",
        element: (
          <PrivetRouter>
            <NgoSignup />
          </PrivetRouter>
        ),
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
      {
        path: "/our-events",
        element: <OurEvents />,
      },
      {
        path: "/our-events/event-details/:id",
        element: <OurEventDetails />,
        loader: ({ params }) =>
          fetch(
            `https://croudfunding-server-muradwahid.vercel.app/event/${params.id}`
          ),
      },
      {
        path: "/causes",
        element: <Causes />,
      },
      {
        path: "/naturalDisaster",
        element: <NaturalDisaster></NaturalDisaster>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/team",
        element: <Team />,
      },
      {
        path: "/dashboard/contacts",
        element: <Contacts />,
      },
      // {
      //   path: "/dashboard/calendar",
      //   element: <Calendar />,
      // },
      {
        path: "/dashboard/invoices",
        element: (
          <PrivetRouter>
            <Invoices />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/form",
        element: (
          <PrivetRouter>
            <Form />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/bar",
        element: (
          <PrivetRouter>
            <Bar />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/pie",
        element: (
          <PrivetRouter>
            <Pie />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/geography",
        element: (
          <PrivetRouter>
            <Geography />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/line",
        element: (
          <PrivetRouter>
            <Line />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/faq",
        element: (
          <PrivetRouter>
            <FAQ />
          </PrivetRouter>
        ),
      },
    ],
    // children: [
    //   {
    //     path: "/",
    //     element: (
    //       <PrivetRouter>
    //         {" "}
    //         <Dashboard />
    //       </PrivetRouter>
    //     ),
    //   },
    //   // {path:"overview",element:<DashboardOverview/>},
    //   {
    //     path: "team",
    //     element: (
    //       <PrivetRouter>
    //         <Dashboard />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "contacts",
    //     element: (
    //       <PrivetRouter>
    //         <Contacts />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "invoices",
    //     element: (
    //       <PrivetRouter>
    //         <Invoices />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "form",
    //     element: (
    //       <PrivetRouter>
    //         <Form />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "bar",
    //     element: (
    //       <PrivetRouter>
    //         <Bar />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "pie",
    //     element: (
    //       <PrivetRouter>
    //         <Pie />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "line",
    //     element: (
    //       <PrivetRouter>
    //         <Line />
    //       </PrivetRouter>
    //     ),
    //   },
    //   {
    //     path: "faq",
    //     element: (
    //       <PrivetRouter>
    //         <FAQ />
    //       </PrivetRouter>
    //     ),
    //   },
    // ],

    // <Route path="/dashboard" element={<Dashboard />} />
    //           <Route path="/team" element={<Team />} />
    //           <Route path="/contacts" element={<Contacts />} />
    //           <Route path="/invoices" element={<Invoices />} />
    //           <Route path="/form" element={<Form />} />
    //           <Route path="/bar" element={<Bar />} />
    //           <Route path="/pie" element={<Pie />} />
    //           <Route path="/line" element={<Line />} />
    //           <Route path="/faq" element={<FAQ />} />
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/room",
    element: (
      <PrivetRouter>
        <Room />
      </PrivetRouter>
    ),
    children: [{ path: "/room/:ID", element: <Room /> }],
  },
]);
