import SingleProduct from "./SingleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function DisplayProducts({ products }) {
    return (
        <section>
            <h1 className="text-6xl uppercase font-bold text-center">
                Check out our <span className="text-red-600">products</span> on
                sales!!
            </h1>
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                effect={"coverflow"}
                lazy={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                initialSlide={1}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                   "@0.00":{
                    slidesPerView:1,
                    effect:"slide",
                    spaceBetween:10,
                    initialSlide:0
                   },
                   "@1.00":{
                    slidesPerView:3,
                    effect:"coverflow"
                   }
                }}
                className="mySwiper mt-10 p-4"
            >
                {products.map((el) => (
                    <SwiperSlide key={el.id}>
                        <SingleProduct
                            title={el.title}
                            description={el.description}
                            discountpercentage={el.discountpercentage}
                            price={el.price}
                            imgpath={el.imgpath}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
