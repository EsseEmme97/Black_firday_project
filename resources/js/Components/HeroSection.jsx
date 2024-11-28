import Lottie from "lottie-react"
import animation from "../../lotties/confetti.json"
export default function HeroSection() {
	return (
	  <section className="mt-32 relative">
		<div className="mx-10 md:border-[20px] md:border-white ">
		  <h1 className="text-center font-bold text-6xl md:text-[110px] uppercase flex flex-col">
			<span className="animate__animated animate__fadeInLeft">Black</span>
			<span className="text-red-600 md:text-[130px] animate__animated animate__fadeInRight ![animation-delay:200ms]">friday</span>
			<span className="animate__animated animate__fadeInUp ![animation-delay:300ms]">sales</span>
		  </h1>
		</div>
		<Lottie
		  className="hidden md:block md:w-[400px] md:h-full md:absolute md:top-4 md:right-4 md:z-10"
		  animationData={animation}
		  loop={true}
		/>
		<Lottie
		  className="hidden md:block md:w-[400px] md:h-full md:absolute md:bottom-4 md:left-4 md:z-10"
		  animationData={animation}
		  loop={true}
		/>
	  </section>
	);
  }
  