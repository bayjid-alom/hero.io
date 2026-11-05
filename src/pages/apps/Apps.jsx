import React from 'react';
import { HashLoader } from 'react-spinners';
import AppCard from '../../ui/AppCard';
import useApps from '../../hooks/useApps';

const Apps = () => {

    const { apps, loading } = useApps();


    return (
        <div className='mx-auto w-[94%] md:w-[92%] lg:w-[90%] my-10'>


            {/* Section Heading */}
            <div className="mb-10 text-center">

                <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
                    All Apps
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>




            {/* Apps Grid + Loading | Container*/}
            {
                loading ? (
                    <div className='flex justify-center mx-auto py-7'>
                        <HashLoader color='#632EE3' size={35}></HashLoader>
                    </div>

                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {
                            apps.map((app, index) => <AppCard
                                key={index}
                                app={app}></AppCard>)
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Apps;