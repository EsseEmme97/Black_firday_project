import SingleReview from "./SingleReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@inertiajs/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
export default function DisplayReviews({ reviews }) {
    return (
        <section className="mt-20">
            <h2 className="font-bold uppercase text-4xl md:text-6xl text-center">
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
                breakpoints={{
                   "@0.00":{
                    slidesPerView:1,
                    effect:"slide",
                    spaceBetween:10,
                    initialSlide:0
                   },
                   "@1.00":{
                    slidesPerView:3,
                    effect:"slide"
                   }
                }}
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
                <Link href="/reviews" className="bg-red-600 uppercase font-bold p-2 rounded-lg hover:scale-105 transition-transform duration-200">Give us your feedback</Link>
            </div>
        </section>
    );
}
