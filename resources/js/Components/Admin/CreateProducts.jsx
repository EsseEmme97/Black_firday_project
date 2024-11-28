import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function CreateProducts() {
    const [imgPreview, setImgPreview] = useState();

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        stock: 1,
        price: 1,
        discountpercentage: 1,
        imgpath: null,
    });

    const handleImagePreview = (e) => {
        if (e.target.files.length > 1) {
            errors.imgpath = "upload only one file";
        }
        setData("imgpath", e.target.files[0]);
        setImgPreview(URL.createObjectURL(e.target.files[0]));
    };

	const handleSubmit = (e) =>{
		e.preventDefault();
		 post("/admin",{onSuccess:()=>{reset("title","description","stock","price","discountpercentage",imgpath)}}) 
	}

    return (
        <section className="flex justify-center items-center my-20">
            <form className="p-4 bg-black rounded-lg w-full md:w-2/5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="title" className="text-sm">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        placeholder="title"
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
				{errors.title && <p className="text-sm text-red-300 mt-2">{errors.title}</p>}
                <div className="flex flex-col gap-1.5 mt-4">
                    <label htmlFor="description" className="text-sm">
                        Description
                    </label>
                    <input
                        id="description"
                        name="description"
                        placeholder="description"
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
				{errors.description && <p className="text-sm text-red-300 mt-2">{errors.description}</p>}
                <div className="flex flex-col gap-1.5 mt-4">
                    <label htmlFor="stock" className="text-sm">
                        Stock
                    </label>
                    <input
                        id="stock"
                        type="number"
                        name="stock"
                        placeholder="stock"
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                        value={data.stock}
                        onChange={(e) => setData("stock", e.target.value)}
                    />
                </div>
				{errors.stock && <p className="text-sm text-red-300 mt-2">{errors.stock}</p>}
                <div className="flex flex-col gap-1.5 mt-4">
                    <label htmlFor="price" className="text-sm">
                        Price
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="price"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                    />
                </div>
				{errors.price && <p className="text-sm text-red-300 mt-2">{errors.price}</p>}
                <div className="flex flex-col gap-1.5 mt-4">
                    <label htmlFor="discountPercentage" className="text-sm">
                        Discount Percentage
                    </label>
                    <input
                        type="number"
                        id="discountPercentage"
                        name="discountPercentage"
                        placeholder="Discount Percentage"
                        value={data.discountpercentage}
                        onChange={(e) =>
                            setData("discountpercentage", e.target.value)
                        }
                        className="rounded-lg outline-none border-none focus:outline-blue-500 text-black"
                    />
                </div>
				{errors.discountpercentage && <p className="text-sm text-red-300 mt-2">{errors.discountpercentage}</p>}
                <div className="flex flex-col gap-1.5 mt-4">
                    <label htmlFor="image" className="text-sm">
                        Image (select one image)
                    </label>
                    <input
                        htmlFor="image"
                        id="image"
                        type="file"
                        onChange={handleImagePreview}
                    />
                    {imgPreview && (
                        <img
                            className="size-16 rounded-full mt-4"
                            src={imgPreview}
                        />
                    )}
                </div>
				{errors.imgpath && <p className="text-sm text-red-300 mt-2">{errors.imgpath}</p>}
                <div className="mt-8 text-center">
                    <button
                        disabled={processing}
                        className="p-2 rounded-lg bg-red-600 uppercase font-bold w-2/5"
						type="submit"
                    >
                        submit
                    </button>
                </div>
            </form>
        </section>
    );
}
