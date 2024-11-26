import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="flex justify-between">
            <img src="./images/logo_black_friday.webp" className="size-16 rounded-full" alt="logo image"></img>
            <ul className="flex items-center gap-8">
				<li className="p-2 rounded hover:bg-red-500 transition-all duration-200">Contattaci</li>
                <li className="p-2 rounded hover:bg-red-500 transition-all duration-200"><FaShoppingCart className="size-4" /></li>
			</ul>
        </nav>
    );
}
