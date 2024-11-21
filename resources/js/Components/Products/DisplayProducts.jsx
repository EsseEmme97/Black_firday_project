import SingleProduct from "./SingleProduct";

export default function DisplayProducts({ products }) {
    return (
        <section>
            <h1 className="text-6xl uppercase font-bold text-center">
                Check out our <span className="text-red-600">products</span> on
                sales!!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
                {products.map((el) => (
                    <SingleProduct
                        title={el.title}
                        description={el.description}
                        discountpercentage={el.discountpercentage}
                        price={el.price}
						imgpath={el.imgpath}
                    />
                ))}
            </div>
        </section>
    );
}
