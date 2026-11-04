import React from 'react';
import Banner from '../../components/homepage/Banner';
import Stats from '../../components/homepage/Stats';
import TrendingApps from '../../components/homepage/TrendingApps';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>

        </>
    );
};

export default Homepage;