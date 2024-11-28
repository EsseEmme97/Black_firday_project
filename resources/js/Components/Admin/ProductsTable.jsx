export default function ProductsTable({ products }) {
    return (
        <>
            <h2 className="md:hidden uppercase font-bold text-2xl">Change to desktop view to see all products</h2>
            <table className="hidden md:table w-full border-collapse border border-slate-50 table-auto">
                <thead>
                    <tr>
                        <th className="bg-zinc-700 p-2 border">Image</th>
                        <th className="bg-zinc-700 p-2 border">Id</th>
                        <th className="bg-zinc-700 p-2 border">Title</th>
                        <th className="bg-zinc-700 p-2 border">Description</th>
                        <th className="bg-zinc-700 p-2 border">Stock</th>
                        <th className="bg-zinc-700 p-2 border">Price</th>
                        <th className="bg-zinc-700 p-2 border">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr>
                                <td className="p-4 text-center border flex justify-center">
                                    <img
                                        className="rounded-full size-8"
                                        src={product.imgpath}
                                    />
                                </td>
                                <td className="p-4 text-center border">
                                    {product.id}
                                </td>
                                <td className="p-4 text-center border">
                                    {product.title}
                                </td>
                                <td className="p-4 text-center border">
                                    {product.description}
                                </td>
                                <td className="p-4 text-center border">
                                    {product.stock}
                                </td>
                                <td className="p-4 text-center border">
                                    {product.price} $
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
