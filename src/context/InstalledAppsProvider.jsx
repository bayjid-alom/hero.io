import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const InstalledAppsContext = createContext()


const InstalledAppsProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);



    const handleInstallApp = (expectedApp) => {
        const isExistApp = installedApps.find(app => app.id == expectedApp.id);

        if (isExistApp) {
            toast.warning(`${expectedApp.title} is already installed!`);
            return;
        }
        else {
            setInstalledApps([...installedApps, expectedApp]);
            toast.success(`${expectedApp.title} installed successfully!`);
        }

    };







    const data = {
        handleInstallApp,
        installedApps,
        setInstalledApps

    }

    return (
        <InstalledAppsContext.Provider value={data}>
            {children}
        </InstalledAppsContext.Provider>
    );
};

export default InstalledAppsProvider;