import RatingStar from "./RatingStar"

export default function SingleReview({title,content,rating}){
	return(
		<article className="p-8 rounded-lg bg-black flex flex-col items-center">
				<img className="size-16 rounded-full" src="./images/userPlaceholder.jpg" alt="userPlaceholder"></img>
				<RatingStar className="mt-4" stars={5} value={rating} readonly={true} />
				<h3 className="font-bold mt-4 text-xl">{title}</h3>
				<p className="text-lg mt-4">{content}</p>
		</article>
	)
}