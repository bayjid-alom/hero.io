import React from 'react';
import { Download, Star } from 'lucide-react';

const TrendingApps = () => {
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




                {/* Apps Grid  | Container*/}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">


                    {/* Static App Card */}
                    <div className="app-card group rounded-xl bg-white p-4 shadow-[0_5px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(99,46,227,0.15)]">

                        {/* App Image */}
                        <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                                alt="Technology App"
                                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* App Title */}
                        <h3 className="mt-4 line-clamp-1 text-lg font-medium text-[#001931] md:text-xl">
                            Tech Master Pro
                        </h3>

                        {/* Download & Rating */}
                        <div className="mt-4 flex items-center justify-between">

                            {/* Downloads */}
                            <div className="inline-flex items-center gap-2 rounded-md bg-[#F1F8E8] px-3 py-2 text-[#00D390]">
                                <Download size={17} strokeWidth={2.2} />
                                <span className="text-sm font-semibold">9M</span>
                            </div>

                            {/* Rating */}
                            <div className="inline-flex items-center gap-2 rounded-md bg-[#FFF0E1] px-3 py-2 text-[#FF8811]">
                                <Star size={19} fill="currentColor" />
                                <span className="text-sm font-semibold">5</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrendingApps;
