import React from 'react';
import { useParams } from 'react-router';
import { Download, Star, MessageSquare } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import useApps from '../../hooks/useApps';
import { HashLoader } from 'react-spinners';



const AppDetails = () => {

    // Not working as expected
    // const { appID } = useParams();
    // const { apps, loading } = useApps();
    // const expectedApp = apps.find(app => app.id === Number(appID));
    // console.log(expectedApp, "Expected");  // Undefined Expected


    // Get app ID from URL
    const { appID } = useParams();
    // Get apps data from custom hook
    const { apps, loading } = useApps();

    // Wait until data loads
    if (loading) {
        return (
            <div className='flex min-h-[60vh] items-center justify-center'>
                <HashLoader color='#632EE3' size={35}></HashLoader>
            </div>
        );
    }


    // Find the expected app using ID
    const expectedApp = apps.find(app => app.id === Number(appID));


    // Handle invalid app ID
    if (!expectedApp) {
        return (
            <div className="mx-auto flex min-h-[50vh] w-[94%] items-center justify-center md:w-[92%] lg:w-[90%]">
                <div className="text-center">
                    <h2 className="mb-3 text-2xl font-bold text-slate-800">
                        App Not Found!
                    </h2>
                    <p className="text-sm text-slate-500">
                        Sorry, the app you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }


    const {
        image,
        title,
        companyName,
        description,
        size,
        reviews,
        ratingAvg,
        downloads,
        ratings
    } = expectedApp;

    // Reverse ratings to show 5 star first
    const chartReversedData = [...ratings].reverse();




    return (
        <div className="mx-auto my-8 w-[94%] md:my-10 md:w-[92%] lg:w-[90%]">

            {/* App Information Section */}
            <section className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">

                {/* App Image */}
                <div className="flex shrink-0 items-center h-ful justify-center md:w-[135px] lg:w-[170px]">
                    <img
                        src={image}
                        alt={title}
                        className="h-32 w-32 rounded-2xl object-cover md:h-36 md:w-36 lg:h-44 lg:w-44"
                    />
                </div>

                {/* App Information */}
                <div className="min-w-0 flex-1">

                    {/* App Title */}
                    <div className="border-b border-slate-200 pb-3 text-center md:text-left">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-lg lg:text-xl">
                            {title}
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            Developed by{' '}
                            <span className="font-medium text-violet-600">
                                {companyName}
                            </span>
                        </p>
                    </div>

                    {/* App Statistics */}
                    <div className="grid grid-cols-3 gap-3 py-4 md:max-w-[330px] md:gap-5">

                        {/* Downloads */}
                        <div>
                            <Download
                                size={19}
                                strokeWidth={2.5}
                                className="mb-1 text-emerald-500"
                            />
                            <p className="text-[11px] text-slate-500">
                                Downloads
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">
                                {downloads}
                            </h3>
                        </div>

                        {/* Average Rating */}
                        <div>
                            <Star
                                size={19}
                                fill="currentColor"
                                className="mb-1 text-orange-500"
                            />
                            <p className="text-[11px] text-slate-500">
                                Average Ratings
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">
                                {ratingAvg}
                            </h3>
                        </div>

                        {/* Total Reviews */}
                        <div>
                            <MessageSquare
                                size={19}
                                fill="currentColor"
                                className="mb-1 text-violet-500"
                            />
                            <p className="text-[11px] text-slate-500">
                                Total Reviews
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">
                                {reviews}
                            </h3>
                        </div>

                    </div>

                    {/* Install Button */}
                    <button className="rounded-sm bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-emerald-600">
                        Install Now ({size} MB)
                    </button>

                </div>
            </section>





            {/* Ratings Section */}
            <section className="mt-7 border-t border-slate-200 pt-4">

                <h3 className="mb-3 text-base font-semibold text-slate-800">
                    Ratings
                </h3>

                {/* Recharts Rating Bar Chart */}
                <div className="h-[160px] w-full md:h-[170px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartReversedData}
                            layout="vertical"
                            margin={{
                                top: 2,
                                right: 8,
                                left: 0,
                                bottom: 0
                            }}
                            barCategoryGap={8}
                        >

                            <XAxis
                                type="number"
                                dataKey="count"
                                domain={[0, 'dataMax']}
                                tickCount={5}

                                // To convert in Million
                                tickFormatter={(value) => {
                                    if (value === 0) return '0';
                                    return `${Math.round(value / 1000000)}M`;
                                }}

                                tick={{
                                    fontSize: 12,
                                    fill: '#64748b'
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                type="category"
                                dataKey="name"
                                width={50}
                                tick={{
                                    fontSize: 12,
                                    fill: '#64748b'
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            {/* Before Bar | Tooltip */}
                            <Tooltip
                                cursor={{ fill: '#fff7ed' }}
                                contentStyle={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #fed7aa',
                                    borderRadius: '10px',
                                    padding: '10px 14px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                                }}
                                labelStyle={{
                                    color: '#334155',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    marginBottom: '4px'
                                }}
                                itemStyle={{
                                    color: '#ff850e',
                                    fontSize: '13px',
                                    fontWeight: 600
                                }}
                                formatter={(value) => [
                                    value.toLocaleString(),
                                    'Ratings'
                                ]}
                            />


                            <Bar
                                dataKey="count"
                                fill="#ff850e"
                                barSize={17}
                                radius={0}
                            />



                        </BarChart>
                    </ResponsiveContainer>

                </div>

            </section>




            {/* Description Section */}
            <section className="mt-7 border-t border-slate-200 pt-4">

                <h3 className="mb-3 text-base font-semibold text-slate-800">
                    Description
                </h3>

                <div className="px-0 py-2 text-justify text-xs leading-[1.8] text-slate-500 md:text-[13px]">

                    <p>
                        {description}
                    </p>

                </div>

            </section>

        </div>
    );
};

export default AppDetails;
