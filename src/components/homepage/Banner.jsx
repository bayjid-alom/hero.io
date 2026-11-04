
import React from 'react';
import bannerImage from "../../assets/images/hero.png";
import playStoreImage from "../../assets/icons/play-store-icon.png";
import appStoreImage from "../../assets/icons/app-store-icon.png";

const Banner = () => {
    return (
        <section className="overflow-hidden bg-[#F8F8FA] pt-24 pb-0 md:pt-30">

            <div className="mx-auto flex w-[94%] flex-col items-center text-center md:w-[92%] lg:w-[90%]">

                {/* Hero Content */}
                <div className="max-w-5xl">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="block">We Build</span>
                        <span>
                            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Productive
                            </span>
                            {' '}Apps
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-4xl text-xs leading-6 text-gray-500 sm:text-sm md:mt-5 md:text-base">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    {/* App Store Badges */}
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:mt-7">
                        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700  md:text-sm">
                            <img src={playStoreImage} alt="Google Play" className="h-5 w-5 object-contain" />
                            Google Play
                        </div>

                        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 md:text-sm">
                            <img src={appStoreImage} alt="App Store" className="h-5 w-5 object-contain" />
                            App Store
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mt-6 flex w-full justify-center md:mt-10 lg:mt-12">
                    <img
                        src={bannerImage}
                        alt="HERO.IO Mobile App"
                        className="block h-auto w-full max-w-[340px] object-contain sm:max-w-[430px] md:max-w-[600px] lg:max-w-[850px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
