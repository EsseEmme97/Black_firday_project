import AdminNavbar from "@/Components/Admin/AdminNavbar";
import RatingStar from "@/Components/Reviews/RatingStar";
import ReviewRow from "@/Components/Reviews/ReviewRow";

export default function AdminReviews({ reviews }) {
    return (
        <>
            <AdminNavbar />
			<h1 className="md:hidden font-bold text-4xl uppercase text-center mt-20">Change to desktop view to see all reviews</h1>
            {reviews.length !== 0 ? (
                <table className="table-auto w-full border-collapse border mt-20">
                    <thead>
                        <tr>
                            <td className="bg-zinc-700 p-2 border text-center">
                                Title
                            </td>
                            <td className="bg-zinc-700 p-2 border text-center">
                                Content
                            </td>
                            <td className="bg-zinc-700 p-2 border text-center">
                                Rating
                            </td>
                            <td className="bg-zinc-700 p-2 border text-center">
                                Validate
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => {
                            return <ReviewRow key={index} {...review} />;
                        })}
                    </tbody>
                </table>
            ) : (
                <h2 className="hidden md:block text-4xl mt-20 text-center uppercase font-bold">No <span className="text-red-600">reviews</span> Available</h2>
            )}
        </>
    );
}
