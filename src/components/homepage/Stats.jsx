import React from 'react';

const Stats = () => {

    return (
        <section className=" bg-gradient-to-b from-[#632EE3] to-[#9F62F2] px-4 py-10 md:py-15 ">

            <div className="mx-auto w-[95%] md:w-[88%] lg:w-[80%]">

                {/* Section Heading */}
                <div className="text-center">
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                        Trusted By Millions, Built For You
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-purple-100 sm:text-sm md:text-base">
                        Join millions of users who trust HERO.IO for their everyday app experience.
                    </p>
                </div>

                {/* Statistics */}
                <div className="mt-8 grid grid-cols-1 text-center md:mt-12 md:grid-cols-3">

                    {/* Downloads */}
                    <div className="flex flex-col items-center justify-center py-6">
                        <p className="text-sm font-medium text-purple-100 md:text-base">
                            Total Downloads
                        </p>

                        <h3 className="mt-2 text-4xl font-extrabold text-white md:text-5xl lg:text-[60px]">
                            29.6M
                        </h3>

                        <p className="mt-2 text-xs font-medium text-white/90 md:text-sm">
                            21% more than last month
                        </p>
                    </div>

                    {/* Reviews */}
                    <div className="flex flex-col items-center justify-center border-y border-white/20 py-6 md:border-x md:border-y-0">
                        <p className="text-sm font-medium text-purple-100 md:text-base">
                            Total Reviews
                        </p>

                        <h3 className="mt-2 text-4xl font-extrabold text-white md:text-5xl lg:text-[60px]">
                            906K
                        </h3>

                        <p className="mt-2 text-xs font-medium text-white/90 md:text-sm">
                            46% more than last month
                        </p>
                    </div>

                    {/* Active Apps */}
                    <div className="flex flex-col items-center justify-center py-6">
                        <p className="text-sm font-medium text-purple-100 md:text-base">
                            Active Apps
                        </p>

                        <h3 className="mt-2 text-4xl font-extrabold text-white md:text-5xl lg:text-[60px]">
                            132+
                        </h3>

                        <p className="mt-2 text-xs font-medium text-white/90 md:text-sm">
                            31 more will launch
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
