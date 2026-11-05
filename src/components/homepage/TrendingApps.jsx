import React, { use, useEffect, useState } from 'react';
import { Download, Star } from 'lucide-react';
import AppCard from '../../ui/AppCard';
import { HashLoader } from 'react-spinners';


const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);


    // Data fetching - Way - 03
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json()

            setTimeout(() => {
                setApps(data)
                setLoading(false)
            }, 5000)

            // setApps(data)
            // setLoading(false)
        }
        fetchData()
    }, [])







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
                            <HashLoader color='#632EE3'></HashLoader>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {
                                apps.slice(0, 9).map((app, index) => <AppCard
                                    key={index}
                                    app={app}></AppCard>)
                            }
                        </div>
                    )
                }




            </div>
        </section>
    );
};

export default TrendingApps;
