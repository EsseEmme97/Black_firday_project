import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="flex justify-between">
            <div className="size-16 bg-white rounded-full"></div>
            <ul className="flex items-center gap-8">
				<li className="p-2 rounded hover:bg-red-500 transition-all duration-200">Contattaci</li>
                <li className="p-2 rounded hover:bg-red-500 transition-all duration-200"><FaShoppingCart className="size-4" /></li>
			</ul>
        </nav>
    );
}
