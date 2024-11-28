import RatingStar from "./RatingStar";
import { HiOutlineCheck } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { useForm } from "@inertiajs/react";
export default function ReviewRow({ title, content, rating,id }) {
	const {post}=useForm({is_accepted:true})

	const handleAcceptedReview= (e)=>{
		e.preventDefault();
		post(`/admin/reviews/update/${id}`);
	}

	const handleDeniedReview=(e)=>{
		e.preventDefault();
		post(`/admin/reviews/delete/${id}`)
	}
    return (
        <tr >
            <td className="text-center border p-2">{title}</td>
            <td className="text-center border p-2">{content}</td>
            <td className="flex justify-center border p-2">
                <RatingStar readonly={true} value={rating} />
            </td>
            <td className="text-center border p-2">
				<div className="flex justify-center gap-4">
					<HiOutlineCheck onClick={handleAcceptedReview} className="text-green-500 text-2xl bg-green-200 rounded-lg cursor-pointer"/>
					<IoMdTrash onClick={handleDeniedReview} className=" bg-red-600 text-2xl rounded-lg cursor-pointer"/>
				</div>
			</td>
        </tr>
    );
}
