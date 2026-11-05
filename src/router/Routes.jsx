import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/notFountPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Homepage,
                loader: () => fetch("/data.json")
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: "/app-details/:appID",
                Component: AppDetails,
            },
            {
                path: '/installed-apps',
                Component: InstallApps
            }
        ],
        errorElement: <NotFoundPage></NotFoundPage>
    }
])