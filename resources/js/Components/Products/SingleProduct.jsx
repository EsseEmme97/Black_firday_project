export default function SingleProduct({
    id,
    title,
    price,
    description,
    discountpercentage,
    imgpath,
}) {
    const floatingPrice = parseFloat(price.replace(",", "."));
    const effectivePrice = (
        floatingPrice -
        (floatingPrice * discountpercentage) / 100
    ).toFixed(2);
    return (
        <article className="p-4 bg-black rounded-lg relative overflow-hidden">
            <div className="overflow-hidden relative">
                <img
                    src={imgpath}
                    className="rounded ax-h-[300px] w-full h-[300px] object-cover hover:scale-110 transition-transform duration-200"
                    loading="lazy"
                />
                <span className="absolute -right-20 top-10 bg-red-500 block rotate-45 w-[300px] text-center p-1.5 font-bold text-xl">
                    {discountpercentage}% OFF
                </span>
            </div>

            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
            <div className="mt-2">
                <span className="line-through text-sm">{price} $</span>
                <span className="text-xl block font-bold">{effectivePrice} $</span>
            </div>
        </article>
    );
}
