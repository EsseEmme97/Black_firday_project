import { Head, Link } from '@inertiajs/react';
import Navbar from "@/Components/Navbar"
import HeroSection from '@/Components/HeroSection';
import Countdown from '@/Components/Countdown';
import DisplayProducts from '@/Components/Products/DisplayProducts';

export default function Welcome({ auth, laravelVersion, phpVersion, products }) {
    console.log(products);
    return (
        <>
            <Head title="Welcome" />
            <Navbar/>
            <HeroSection/>
            <Countdown/>
            <DisplayProducts products={products}/>
        </>
    );
}
