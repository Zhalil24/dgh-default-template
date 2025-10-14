import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";

// //Crm Pages
import CrmCompanies from "../pages/Crm/CrmCompanies";
import CrmContacts from "../pages/Crm/CrmContacts";
import CrmDeals from "../pages/Crm/CrmDeals/index";
import CrmLeads from "../pages/Crm/CrmLeads/index";

import BasicPasswReset from '../pages/Authentication/PasswordReset/BasicPasswReset';

import BasicLockScreen from '../pages/Authentication/LockScreen/BasicLockScr';
import BasicSuccessMsg from '../pages/Authentication/SuccessMessage/BasicSuccessMsg';
import BasicTwosVerify from '../pages/Authentication/TwoStepVerification/BasicTwosVerify';
import Basic404 from '../pages/Authentication/Errors/Basic404';
import Alt404 from '../pages/Authentication/Errors/Alt404';
import Error500 from '../pages/Authentication/Errors/Error500';
import BasicPasswCreate from "../pages/Authentication/PasswordCreate/BasicPasswCreate";
import Offlinepage from "../pages/Authentication/Errors/Offlinepage";
// //APi Key
import APIKey from "../pages/APIKey/index";

// //login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// // User Profile
import UserProfile from "../pages/Authentication/user-profile";
import OnePage from "pages/Landing/OnePage";
import NFTLanding from "pages/Landing/NFTLanding";
import JobLanding from "pages/Job_Landing/Job";


const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },



  // //Api Key
  { path: "/apps-api-key", component: <APIKey /> },

  // //Crm
  { path: "/apps-crm-contacts", component: <CrmContacts /> },
  { path: "/apps-crm-companies", component: <CrmCompanies /> },
  { path: "/apps-crm-deals", component: <CrmDeals /> },
  { path: "/apps-crm-leads", component: <CrmLeads /> },


  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  // //AuthenticationInner pages
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },
  { path: "/landing", component: <OnePage /> },
  { path: "/nft-landing", component: <NFTLanding /> },
  { path: "/job-landing", component: <JobLanding /> },
];

export { authProtectedRoutes, publicRoutes };