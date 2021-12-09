import { Box } from '@mui/system';
import React from 'react';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';
import TopNavigation from '../TopNavigation/TopNavigation';
import Contact from '../../Contact/Contact'
import Footer from '../../Footer/Footer';
import Cars from '../../../shared/Cars/Cars';
import About from '../../About/About';

const Home = () => {
    return (
        <div id = "home">
        <Box>
            <TopNavigation></TopNavigation>
            <TopBanner></TopBanner>
            <About></About>
            <Cars></Cars>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </Box>
        </div>
    );
};

export default Home;