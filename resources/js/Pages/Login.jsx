import { Link, useForm, Head } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login", {
            onSuccess: () => {
                reset("email", "password");
            },
        });
    };

    return (
        <main className="min-h-screen">
            <Head title="login" />
            <h1 className="text-4xl md:text-6xl uppercase text-center font-bold mt-40">
                Admin <span className="text-red-600">dashboard</span> login
            </h1>
            <div className="flex justify-center flex-col items-center mt-20 gap-10">
                <Link href="/">
                    <img
                        src="./images/logo_black_friday.webp"
                        className="rounded-full size-32 hover:scale-110 transition-all duration-300"
                    />
                </Link>
                <form
                    onSubmit={handleSubmit}
                    className="bg-black p-4 rounded-lg w-full md:w-1/5"
                >
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm">
                            email
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="email"
                            className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-sm text-red-300 mt-2">
                            {errors.email}
                        </p>
                    )}
                    <div className="flex flex-col gap-1.5 mt-4">
                        <label htmlFor="password" className="text-sm">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="password"
                            className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        />
                    </div>
                    {errors.password && (
                        <p className="text-sm text-red-300 mt-2">
                            {errors.password}
                        </p>
                    )}
                    <div className="text-center mt-4">
                        <button
                            className="uppercase p-2 rounded-lg bg-red-600"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
