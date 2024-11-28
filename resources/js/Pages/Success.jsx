import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import Lottie from "lottie-react";
import data from "../../lotties/success.json";
import { useEffect } from "react";
import { router } from "@inertiajs/react";
export default function Success() {

    useEffect(() => {
        const timer = setTimeout(() => {
            router.visit("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <MainLayout>
            <Head title="thanks for your review" />
            <main className="pt-32 min-h-64">
                <h1 className="text-4xl md:text-6xl text-center font-bold uppercase">
                    Thanks for your <span className="text-red-600">review</span>
                </h1>
                <h2 className="md:text-4xl text-2xl text-center font-bold mt-8">
                Your review will be reviewed by the administrator! You will be redirected to the home page soon.
                </h2>
                <div className="mt-20 flex justify-center">
                    <Lottie
                        animationData={data}
                        loop={true}
                        className="size-32 md:size-64 block"
                    />
                </div>
            </main>
        </MainLayout>
    );
}
