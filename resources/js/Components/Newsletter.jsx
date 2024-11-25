import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Newsletter() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        gdpr: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/newsletter", {
            preserveScroll: true,
            onSuccess: () => {
                reset("name", "email", "gdpr");
                setShowSuccessMessage(true);
            },
        });
    }

    useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showSuccessMessage]);
    

    return (
        <section className="mt-20 relative">
            <h2 className="uppercase text-6xl font-bold text-center">
                Subscribe to our{" "}
                <span className="text-red-600">Newsletter</span> !!
            </h2>
            <form
                className="p-4 mt-20 flex flex-col w-1/3 mx-auto bg-black rounded-lg"
                onSubmit={handleSubmit}
                method="POST"
            >
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm" for="name">
                        Name
                    </label>
                    <input
                        name="name"
                        id="name"
                        placeholder="name"
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                {errors.gdpr && (
                    <p className="text-sm text-red-300 mt-2">{errors.name}</p>
                )}
                <div className="flex flex-col gap-1.5 mt-4">
                    <label className="text-sm">Email</label>
                    <input
                        placeholder="email"
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </div>
                {errors.gdpr && (
                    <p className="text-sm text-red-300 mt-2">{errors.email}</p>
                )}
                <div className="mt-8 flex items-start">
                    <input
                        id="gdpr"
                        name="gdpr"
                        type="checkbox"
                        className="rounded outline-none border-none"
                        onChange={(e) => setData("gdpr", e.target.checked)}
                        checked={data.gdpr}
                    />
                    <label for="gdpr" className="text-xs mx-2">
                        By checking this box, you consent to the processing of
                        your personal data in accordance with our Privacy
                        Policy.
                    </label>
                </div>
                {errors.gdpr && (
                    <p className="text-sm text-red-300 mt-2">{errors.gdpr}</p>
                )}
                <div className="flex justify-center mt-8">
                    <button
                        disabled={processing}
                        type="submit"
                        className="bg-red-600 rounded-lg p-2 uppercase font-bold hover:scale-105 transition-transform duration-200"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
            {showSuccessMessage && (
                <div className=" animate__backInRight absolute rounded-lg p-4 bg-green-200 text-green-500 border-green-500 w-1/4 bottom-0 right-0">
                    Thank you for your subscription!!
                </div>
            )}
        </section>
    );
}
