import RatingStar from "./RatingStar";
import { useForm } from "@inertiajs/react";

export default function ReviewsForm(){
	const {data,setData,processing,errors, post} = useForm({
		title:"",
		content:"",
		rating:0
	})

	const handleSubmit = (e) =>{
		e.preventDefault();
		post("/reviews");
	}

	return(
		<form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg w-full md:w-1/3">
			<div className="flex flex-col gap-1.5">
				<label htmlFor="title" className="text-sm">Title</label>
				<input value={data.title} onChange={e=>setData("title",e.target.value)} id="title" name="title" placeholder="insert the title of the review"  className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"/>
			</div>
			{errors.title && <p className="text-sm text-red-300 mt-2">{errors.title}</p>}
			<div className="mt-4 flex flex-col gap-1.5">
				<label className="text-sm" htmlFor="content">Content</label>
				<input value={data.content} onChange={e=>setData("content",e.target.value)} placeholder="insert the content of the review" id="content" name="content" className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"/>
			</div>
			{errors.content && <p className="text-sm text-red-300 mt-2">{errors.content}</p>}
			<RatingStar onRate={rate=>setData("rating",rate)} className="mt-8 justify-center"/>
			{errors.rating && <p className="text-sm text-red-300 mt-2">{errors.rating}</p>}
			<div className="text-center mt-8">
				<button disabled={processing} type="submit" className="uppercase p-2 rounded-lg bg-red-600 w-2/5">submit</button>
			</div>
		</form>
	)
}