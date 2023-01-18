import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardActivities from "../pages/Dashboard/DashboardActivities/DashboardActivities";
import DashboardBankDonation from "../pages/Dashboard/DashboardBankDonation/DashboardBankDonation";
import DashboardDonors from "../pages/Dashboard/DashboardDonors/DashboardDonors";
import DashboardOverview from "../pages/Dashboard/DashboardOverview/DashboardOverview";
import DashboardUser from "../pages/Dashboard/DashboardUser/DashboardUser";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/", element: <Home />, children: [
      
    ]
  },
  { path: "/signin", element: <Signin /> },
  {path:"/signup",element:<Signup/>},
  {
    path: "/dashboard", element: <DashboardLayout />, children: [
      { path: "/dashboard", element: <Dashboard /> },
      {path:"overview",element:<DashboardOverview/>},
      { path: "user", element: <DashboardUser /> },
      { path: "activity", element: <DashboardActivities /> },
      {path:"bankdonors",element:<DashboardBankDonation/>},
      {path:"donors",element:<DashboardDonors/>},
  ]}
])