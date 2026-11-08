
import React, { useContext, useState } from 'react';
import { Download, Star } from 'lucide-react';
import { InstalledAppsContext } from '../../context/InstalledAppsProvider';
import { toast } from 'react-toastify';

const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);


    const handleUninstall = (app) => {
        const filtered = installedApps.filter(item => item.id != app.id);

        if (filtered) {
            setInstalledApps(filtered);
            toast.success(`${app.title} uninstalled successfully!`);
        }
    };




    return (
        <div className="mx-auto w-[94%] md:w-[92%] lg:w-[90%] my-10">

            {/* Section Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
                    Your Installed Apps
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
                    Explore and manage all your installed applications in one place.
                </p>
            </div>

            {/* Sort Dropdown + App Count */}
            <div className="flex justify-between items-center gap-3 mb-6">
                <h2 className="font-bold text-base text-gray-900">
                    {installedApps.length} Apps Found
                </h2>

                {/* Static Dropdown */}
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn min-h-0 h-9 w-36 md:w-40 border border-gray-200 rounded-lg bg-white text-gray-700 text-xs md:text-sm font-medium shadow-none hover:bg-gray-50"
                    >
                        Sort By Size
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu mt-1 w-40 rounded-lg bg-white border border-gray-100 p-2 shadow-md text-sm text-gray-600 z-10"
                    >
                        <li><a>Size</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Name</a></li>
                    </ul>
                </div>
            </div>





            {/* Installed Apps Container */}
            <div className="flex flex-col gap-3">

                {installedApps.map(app => (
                    <div
                        key={app.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >

                        {/* App Information */}
                        <div className="flex items-center gap-3 min-w-0">

                            {/* App Image */}
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover bg-gray-100 border border-gray-100 shrink-0"
                            />

                            {/* App Details */}
                            <div className="min-w-0">
                                <h3 className="font-semibold text-sm md:text-base text-gray-900 truncate">
                                    {app.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs">

                                    <span className="flex items-center gap-1 text-emerald-500 font-medium">
                                        <Download size={13} />
                                        {app.downloads}
                                    </span>

                                    <span className="flex items-center gap-1 text-orange-500 font-medium">
                                        <Star size={13} fill="currentColor" />
                                        {app.ratingAvg}
                                    </span>

                                    <span className="text-gray-500">
                                        {app.size} MB
                                    </span>

                                </div>
                            </div>
                        </div>

                        {/* Uninstall Button */}
                        <div className="sm:shrink-0">
                            <button
                                onClick={() => handleUninstall(app)}
                                className="btn min-h-0 h-9 w-full sm:w-auto px-5 rounded-lg border-none bg-emerald-500 text-white text-xs md:text-sm font-semibold shadow-none hover:bg-emerald-600">
                                Uninstall
                            </button>
                        </div>

                    </div>
                ))}





                {/* Empty State */}
                {installedApps.length === 0 && (
                    <div className="py-16 text-center bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800">
                            No Apps Installed Yet!
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Explore apps and install your favorites.
                        </p>
                    </div>
                )}


            </div>

        </div>
    );
};

export default InstallApps;
