import { ProductsType } from '@/app/interfaces'
import DeleteButton from '@/app/ui/dashboard/delete-button/DeleteButton'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineEdit } from 'react-icons/md'

const ProductsPage = async () => {
	try {
		const res = await fetch(`https://fakestoreapi.in/api/products?limit=250`)
		const { products }: ProductsType = await res.json()

		return (
			<div className='bg-background p-5 mt-5 border border-backgroundAdd'>
				<div className='flex items-center justify-between bg-background mb-7'>
					<Link href={'/dashboard/products/add'} className='button'>
						Add new
					</Link>
				</div>
				<table className='w-full p-1 border border-backgroundAdd'>
					<thead className='border-b border-backgroundAdd'>
						<tr>
							<td></td>
							<td>Model</td>
							<td>Category</td>
							<td>Price</td>
							<td>Discount</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{products
							.sort((a, b) => a.category.localeCompare(b.category))
							.map((product, idx) => (
								<tr key={product.id}>
									<td>{idx + 1}</td>
									<td>
										<div className='flex gap-2 items-center'>
											<Image
												src={product.image || '/noavatar.png'}
												alt='user-img'
												width={40}
												height={40}
												sizes='w-10 h-10'
												className='rounded object-cover'
											/>
											{product.model.slice(0, 25)}
										</div>
									</td>
									<td>{product.category}</td>
									<td>{product.price}</td>
									<td>{product.discount ? product.discount : '0'}%</td>
									<td className='w-12'>
										<div className='flex gap-1 items-center'>
											<Link
												href={`/dashboard/products/${product.id}`}
												className='border border-button p-1.5'
											>
												<MdOutlineEdit size={18} />
											</Link>
											<DeleteButton id={product.id} url='products' />
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		)
	} catch (error) {
		;<div>{error as string}</div>
	}
}

export default ProductsPage
