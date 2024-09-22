import { lazy } from "react";
import Loadable from "app/components/Loadable";
import {Navigate} from "react-router-dom";

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));

// const FirebaseLogin = Loadable(lazy(() => import("./login/FirebaseLogin")));
// const FirebaseRegister = Loadable(lazy(() => import("./register/FirebaseRegister")));

const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

// const Auth0Login = Loadable(lazy(() => import("./login/Auth0Login")));

const sessionRoutes = [
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },
  { path: "*", element: <Navigate to="/session/signin" /> },
  // { path: "*", element: <NotFound /> }
];

export default sessionRoutes;
