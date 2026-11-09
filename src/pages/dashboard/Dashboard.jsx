import React, { useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../context/InstalledAppsProvider';
import useApps from '../../hooks/useApps';


const Dashboard = () => {

    const { installedApps } = useContext(InstalledAppsContext);
    const { apps } = useApps();
    console.log(apps, "apps");


    const installedLen = installedApps.length
    const unInstalledApps = apps.length - installedLen;


    const data = [
        { name: 'Installed', value: installedLen, fill: '#632EE3' },
        { name: 'Uninstalled', value: unInstalledApps, fill: '#F59E0B' },
    ];




    return (
        <section className='mx-auto w-[94%] md:w-[92%] lg:w-[90%] my-8 mb-12 md:mb-16'>
            {/* Section Heading */}
            <div className="mb-10 text-center">

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                    Your App <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Dashboard</span>
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
                    Track your installed apps and explore your application statistics at a glance.
                </p>
            </div>






            <div className="flex justify-center">
                <PieChart
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        maxHeight: '70vh',
                        aspectRatio: 1
                    }}
                    responsive
                >
                    <Pie
                        data={data}
                        innerRadius="72%"
                        outerRadius="92%"
                        cornerRadius="50%"
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                        isAnimationActive={true}
                        animationDuration={1000}
                    />

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{
                            paddingTop: '20px',
                            fontSize: '13px',
                            fontWeight: '600'
                        }}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1E1B4B',
                            border: '1px solid #632EE3',
                            borderRadius: '12px',
                            padding: '12px 16px',
                            boxShadow: '0 8px 25px rgba(99,46,227,0.2)'
                        }}
                        itemStyle={{
                            color: '#FFFFFF',
                            fontSize: '13px',
                            fontWeight: '600'
                        }}
                        labelStyle={{
                            color: '#C4B5FD',
                            fontSize: '13px',
                            fontWeight: '700',
                            marginBottom: '5px'
                        }}
                        cursor={false}
                        animationDuration={200}
                    />
                </PieChart>
            </div>



        </section>
    );
};

export default Dashboard;