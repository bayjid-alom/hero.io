
import React from 'react';

const Stats = () => {
    const statistics = [
        {
            value: '29.6M',
            label: 'Total Downloads',
            description: 'Across all platforms'
        },
        {
            value: '906K',
            label: 'Total Reviews',
            description: 'With 4.8 star rating'
        },
        {
            value: '132+',
            label: 'Active Apps',
            description: 'In different categories'
        }
    ];

    return (
        <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-10 text-white md:py-12">
            <div className="mx-auto w-[94%] md:w-[92%] lg:w-[90%]">

                <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                    Trusted By Millions, Built For You
                </h2>

                <div className="mt-8 grid grid-cols-3 gap-3 text-center md:mt-10 md:gap-6">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-[10px] font-medium text-purple-100 md:text-sm">
                                {stat.label}
                            </p>

                            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">
                                {stat.value}
                            </h3>

                            <p className="mt-2 text-[8px] text-purple-100 sm:text-[10px] md:text-xs">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;
