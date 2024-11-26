import SingleReview from "./SingleReview";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
export default function DisplayReviews({ reviews }) {
    console.log(reviews);
    return (
        <section className="mt-20">
            <h2 className="font-bold uppercase text-6xl text-center">
                what <span className="text-red-600">they</span> tell{" "}
                <span className="text-red-600">about us</span>
            </h2>
            <Swiper
                effect={"slide"}
                grabCursor={true}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{delay:2500}}
                modules={[Autoplay]}
                className="mySwiper mt-20 mx-20"
            >
                {reviews.map((review) => {
                    return (
                        <SwiperSlide key={review.id}>
                            <SingleReview
                                title={review.title}
                                content={review.content}
                                rating={review.rating}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="text-center mt-10">
                <a href="#" className="bg-red-600 uppercase font-bold p-2 rounded-lg hover:scale-105 transition-transform duration-200">Give us your feedback</a>
            </div>
        </section>
    );
}
