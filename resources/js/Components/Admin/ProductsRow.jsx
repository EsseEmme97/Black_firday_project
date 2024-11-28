import { MdModeEdit } from "react-icons/md";
import { IoMdTrash, IoIosSave } from "react-icons/io";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

export default function ProductsRow({
    id,
    imgpath,
    title,
    description,
    stock,
    price,
}) {
    const [isEditable, setIsEditable] = useState(false);
	const [showModal,setShowModal]=useState(false);
    const { data, setData, post, processing } = useForm({
        id,
        imgpath,
        title,
        description,
        stock,
        price,
    });

    const handleClick = () => {
        setIsEditable(!isEditable);
        if (isEditable) {
            post(`/admin/update/${id}`, {
                preserveScroll: true,
            });
        }
    };

	const handleDelete= () =>{
		setShowModal(!showModal);
	}

    return (
        <tr>
            <td className="p-4 text-center border flex justify-center">
                <img className="rounded-full size-8" src={imgpath} />
            </td>
            <td className="p-4 text-center border">{id}</td>
            <td className="text-center border">
                <input
                    readOnly={!isEditable}
                    className="text-zinc-50 placeholder:text-zinc-50 w-full h-full bg-inherit border-none focus:ring-transparent"
                    placeholder="Title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
            </td>
            <td className="text-center border">
                <input
                    readOnly={!isEditable}
                    className="text-zinc-50 placeholder:text-zinc-50 w-full h-full bg-inherit border-none focus:ring-transparent"
                    placeholder="Description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
            </td>
            <td className="text-center border">
                <input
                    readOnly={!isEditable}
                    className="text-zinc-50 placeholder:text-zinc-50 w-full h-full bg-inherit border-none focus:ring-transparent"
                    placeholder="Stock"
                    value={data.stock}
                    onChange={(e) => setData("stock", e.target.value)}
                />
            </td>
            <td className="text-center border">
                <input
                    readOnly={!isEditable}
                    className="text-zinc-50 placeholder:text-zinc-50 w-full h-full bg-inherit border-none focus:ring-transparent"
                    placeholder="Price"
                    value={data.price}
                    onChange={(e) => setData("price", e.target.value)}
                />
            </td>
            <td className="p-4 text-center border">
                <div className="flex justify-center gap-4">
                    {isEditable ? (
                        <IoIosSave
                            onClick={handleClick}
                            className="p-1 rounded-lg bg-blue-400 text-3xl cursor-pointer"
                        />
                    ) : (
                        <MdModeEdit
                            onClick={handleClick}
                            className="p-1 rounded-lg bg-blue-400 text-3xl cursor-pointer"
                        />
                    )}
                    <IoMdTrash onClick={handleDelete} className="p-1 rounded-lg bg-red-500 text-3xl cursor-pointer" />
                </div>
            </td>
		{showModal && createPortal(<Modal showModal={showModal} setShowModal={setShowModal} id={id} />, document.body)}			
        </tr>
    );
}
