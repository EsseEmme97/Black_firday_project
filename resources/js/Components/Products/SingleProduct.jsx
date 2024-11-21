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
                />
                <span className="absolute -right-20 top-10 bg-red-500 block rotate-45 w-[300px] text-center p-1.5 font-bold text-xl">
                    {discountpercentage}% OFF
                </span>
            </div>

            <h2>{title}</h2>
            <p>{description}</p>
            <span className="line-through">{price} $</span>
            <span className="text-xl block">{effectivePrice} $</span>
        </article>
    );
}
