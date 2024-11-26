
export default function Navbar() {
    return (
        <nav className="relative">
            <div className="flex pt-2 justify-between fixed top-0 w-full max-w-full pr-6 z-10 bg-zinc-900">
                <img
                    src="./images/logo_black_friday.webp"
                    className="size-16 rounded-full"
                    alt="logo image"
                ></img>
                <ul className="flex items-center gap-8">
                    <li className="p-2 rounded hover:bg-red-500 transition-all duration-200">
                        <a href="#products">Products</a>
                    </li>
                    <li className="p-2 rounded hover:bg-red-500 transition-all duration-200">
                        <a href="#newsletter">Newsletter</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
