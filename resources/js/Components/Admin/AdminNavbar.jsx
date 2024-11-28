import { Link, useForm } from "@inertiajs/react";

export default function AdminNavbar() {
    const { post } = useForm();

    const handleClick = (e) => {
        e.preventDefault();
        post("/logout");
    };

    return (
        <nav className="flex justify-between">
            <Link className="size-16 rounded-full">
                <img
                    src="./images/logo_black_friday.webp"
                    className="size-16 rounded-full"
                />
            </Link>
            <ul className="flex items-center gap-2">
                <li>
                    <Link
                        href="/admin"
                        className="hover:bg-red-600 cursor-pointer transition-colors duration-300 p-2 rounded-lg"
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/reviews"
                        className="hover:bg-red-600 cursor-pointer transition-colors duration-300 p-2 rounded-lg"
                    >
                        Reviews
                    </Link>
                </li>
                <li
                    onClick={handleClick}
                    className="hover:bg-red-600 cursor-pointer transition-colors duration-300 p-2 rounded-lg"
                >
                    Logout
                </li>
            </ul>
        </nav>
    );
}
