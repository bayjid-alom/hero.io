import React, { use, useEffect, useState } from 'react';
import AppCard from '../../ui/AppCard';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import useApps from '../../hooks/useApps';


const TrendingApps = () => {

    const { apps, loading } = useApps()


    return (
        <section className="bg-[#F8F7FC] py-16 md:py-20 lg:py-25">
            <div className="mx-auto w-[94%] md:w-[92%] lg:w-[90%]">

                {/* Section Heading */}
                <div className="mb-10 text-center">

                    <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
                        Trending Apps
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
                                apps.slice(0, 8).map((app, index) => <AppCard
                                    key={index}
                                    app={app}></AppCard>)
                            }
                        </div>
                    )
                }






                {/* View All Button */}
                {
                    loading === false && <div className="flex justify-center mt-8">
                        <Link to="/apps">
                            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                                View all <ChevronRight size={18} />
                            </button>
                        </Link>
                    </div>
                }




            </div>
        </section>
    );
};

export default TrendingApps;
