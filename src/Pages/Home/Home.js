import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Contact from './Contact';
import Faq from './Faq';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummury></BusinessSummury>
            <Reviews></Reviews>
            <Contact></Contact>
            <Faq></Faq>
        </>
    )
};

export default Home;