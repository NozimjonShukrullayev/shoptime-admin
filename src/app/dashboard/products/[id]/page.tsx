'use client'

import { SingleProductType } from '@/app/interfaces'
import ProductsForm from '@/app/ui/dashboard/product-form/ProductForm'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProductDetailedPage = () => {
	const { id } = useParams<{ id: string }>()
	const [dataProduct, setDataProduct] = useState<SingleProductType>()

	useEffect(() => {
		const getProduct = async () => {
			const res = await fetch(`https://fakestoreapi.in/api/products/${id}`)
			const data: SingleProductType = await res.json()

			setDataProduct(data)
		}
		getProduct()
	}, [dataProduct])

	return (
		<div
			id='product-detailed'
			className='bg-background p-5 rounded border border-backgroundAdd my-7 flex gap-5 justify-between items-start'
		>
			<div className='flex-1 border border-backgroundAdd bg-backgroundSoft p-5'>
				<Image
					src={dataProduct?.product.image || '/noavatar.png'}
					alt='user-image'
					width={160}
					height={160}
					sizes='w-40 h-40'
					className='w-40 h-40 cursor-pointer'
				/>
			</div>
			<div className='flex-[4] border border-backgroundAdd p-5'>
				<ProductsForm product={dataProduct?.product} />
			</div>
		</div>
	)
}

export default ProductDetailedPage
