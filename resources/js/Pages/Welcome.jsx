import { Head, Link } from "@inertiajs/react";
import HeroSection from "@/Components/HeroSection";
import Countdown from "@/Components/Countdown";
import DisplayProducts from "@/Components/Products/DisplayProducts";
import Newsletter from "@/Components/Newsletter";
import DisplayReviews from "@/Components/Reviews/DisplayReviews";
import MainLayout from "@/Layouts/MainLayout";

export default function Welcome({ products, reviews }) {
    return (
        <MainLayout>
            <Head title="Black friday sales" />
            <HeroSection />
            <Countdown />
            <DisplayProducts products={products} />
            <Newsletter />
            <DisplayReviews reviews={reviews} />
        </MainLayout>
    );
}
