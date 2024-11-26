import { FaWhatsapp, FaFacebook, FaInstagram, FaHeart } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";

export default function Footer() {
    return (
        <footer>
            <div className="flex uppercase mt-20 border-t py-10 border-b">
                <div className="w-1/2 flex justify-center">
                    <img
                        className="rounded-full size-64"
                        src="./images/logo_black_friday.webp"
                        alt="logo image"
                    ></img>
                </div>
                <div className="w-1/2">
                    <h3 className="text-xl text-center font-bold">
                        Come to our <span className="text-red-600">shop</span>
                    </h3>
                    <div className="flex mt-8">
                        <div className="border-r border-l px-6 w-1/2">
                            <h4 className="font-bold text-center text-xl">
                                About us
                            </h4>
                            <div className="flex items-center mt-4 gap-2 justify-center">
                                <GiPositionMarker />
                                <p>London, main street, 999</p>
                            </div>
                            <div className="flex mt-4 gap-2 justify-center">
                                <FaFacebook className="size-8 hover:scale-110 hover:rotate-3 transition-transform duration-200" />
                                <FaInstagram className="size-8 hover:scale-110 hover:rotate-3 transition-transform duration-200" />
                                <FaWhatsapp className="size-8 hover:scale-110 hover:rotate-3 transition-transform duration-200" />
                            </div>
                        </div>
                        <div className="w-1/2 text-center">
                            <h4 className="font-bold text-center text-xl">
                                support
                            </h4>
                            <p className="mt-4 hover:scale-105 transition-transform duration-200">
                                Contact
                            </p>
                            <p className="mt-4 hover:scale-105 transition-transform duration-200">
                                Refund Policy
                            </p>
                            <p className="mt-4 hover:scale-105 transition-transform duration-200">
                                Faq's
                            </p>
                        </div>
                    </div>
                </div>
            </div>
			<p className="my-6 text-center text-sm">
				Made With <FaHeart className="inline text-red-600 mx-2"/> by <span className="font-bold">Sebastian</span> for Aulab Coding Challenge
			</p>
        </footer>
    );
}
