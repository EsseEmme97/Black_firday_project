import Lottie from "lottie-react"
import animation from "../../lotties/confetti.json"
export default function HeroSection() {
	return (
	  <section className="mt-20 relative">
		<div className="mx-10 border-[20px] border-white ">
		  <h1 className="text-center font-bold text-[110px] uppercase flex flex-col">
			<span className="animate__animated animate__fadeInLeft">Black</span>
			<span className="text-red-600 text-[130px] animate__animated animate__fadeInRight ![animation-delay:200ms]">friday</span>
			<span className="animate__animated animate__fadeInUp ![animation-delay:300ms]">sales</span>
		  </h1>
		</div>
		<Lottie
		  className="w-[400px] h-full absolute top-4 right-4 z-10"
		  animationData={animation}
		  loop={true}
		/>
		<Lottie
		  className="w-[400px] h-full absolute bottom-4 left-4 z-10"
		  animationData={animation}
		  loop={true}
		/>
	  </section>
	);
  }
  