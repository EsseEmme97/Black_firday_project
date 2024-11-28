import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function Modal({showModal, setShowModal, id}) {
	const {post} = useForm({...id});

	const handleClose= () =>{
		post(`/admin/delete/${id}`,{preserveScroll:true});
		console.log("richiesta va")
		setShowModal(!showModal)
	}
    return (
        <Dialog
            open={showModal}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={handleClose}
        >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-sm">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-red-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <DialogTitle
                            as="h3"
                            className="text-red-600 font-medium"
                        >
                            Are you sure to delete?
                        </DialogTitle>
                        <p className="mt-2 text-sm/6 text-red-600">
                            Confirm your action by clicking on the below button
                        </p>
                        <div className="mt-4">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-red-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-600"
                                onClick={handleClose}
                            >
                                Delete
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
