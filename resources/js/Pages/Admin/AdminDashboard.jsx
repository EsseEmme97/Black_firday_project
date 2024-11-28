import AdminNavbar from "@/Components/Admin/AdminNavbar"
import ProductsTable from "@/Components/Admin/ProductsTable"
import CreateProducts from "@/Components/Admin/CreateProducts"
import { Head } from "@inertiajs/react"

export default function AdminDashboard({products}){
	return(
		<>
			<Head title="dashboard"/>
			<AdminNavbar/>
			<CreateProducts/>
			<ProductsTable products={products}/>
		</>
		
	)
}