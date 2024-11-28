import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import ReviewsForm from "@/Components/Reviews/ReviewsForm";

export default function Reviews() {
    return (
        <MainLayout>
            <Head title="reviews" />
            <main className="pt-32">
                <h1 className="font-bold text-center text-4xl md:text-6xl uppercase">
                    Add your <span className="text-red-600">review</span> down
                    here!!
                </h1>
                <section className="flex justify-center items-center min-h-screen">
                    <ReviewsForm />
                </section>
            </main>
        </MainLayout>
    );
}
