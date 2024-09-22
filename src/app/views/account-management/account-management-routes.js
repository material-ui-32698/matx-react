import { lazy } from "react";
import Loadable from "app/components/Loadable";

const AccountList = Loadable(lazy(() => import("./AccountList")));
const AccountType = Loadable(lazy(() => import("./AccountType")));


const accountManagementRoutes = [
    { path: "/account-management/account-type", element: <AccountType /> },
    { path: "/account-management/account-list", element: <AccountList /> },
];

export default accountManagementRoutes;
