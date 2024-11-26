import { Head, Link } from '@inertiajs/react';
import Navbar from "@/Components/Navbar"
import HeroSection from '@/Components/HeroSection';
import Countdown from '@/Components/Countdown';
import DisplayProducts from '@/Components/Products/DisplayProducts';
import Newsletter from '@/Components/Newsletter';
import DisplayReviews from '@/Components/Reviews/DisplayReviews';
import Footer from '@/Components/Footer';


export default function Welcome({ auth, laravelVersion, phpVersion, products, reviews }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar/>
            <HeroSection/>
            <Countdown/>
            <DisplayProducts products={products}/>
            <Newsletter/>
            <DisplayReviews reviews={reviews}/>
            <Footer/>
        </>
    );
}
