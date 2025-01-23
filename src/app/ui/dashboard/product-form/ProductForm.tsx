'use client'

import { ProductType } from '@/app/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef, useState } from 'react'
import { MdOutlineRemove } from 'react-icons/md'
import { toast } from 'react-toastify'

interface PageProps {
	product?: ProductType
}

const ProductForm: FC<PageProps> = ({ product }) => {
	const router = useRouter()
	const formRef = useRef<HTMLFormElement | null>(null)
	const [categories, setCategories] = useState<string[]>([''])
	const [descriptionState, setDescriptionState] = useState(product?.desciption)
	const [selectedImage, setSelectedImage] = useState<string | null>(
		product?.image as string
	)

	const getCategories = async () => {
		const res = await fetch('https://fakestoreapi.in/api/products/category')
		const { categories }: { categories: string[] } = await res.json()
		setCategories(categories)
	}
	useEffect(() => {
		getCategories()
	}, [])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!formRef.current) {
			return
		}
		const formData = new FormData(formRef.current)
		const { title, price, brand, model, color, category, discount } =
			Object.fromEntries(formData)

		if (!selectedImage) {
			formData.append('image', product?.image as string)
		} else {
			formData.append('image', selectedImage)
		}
		if (descriptionState)
			formData.append('description', descriptionState as string)
		const payload = {
			title,
			price,
			brand,
			model,
			color,
			category,
			discount,
		}

		try {
			const res = await fetch(
				`https://fakestoreapi.in/api/products/${product?.id}`,
				{
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				}
			)

			if (!res.ok) {
				throw 'ooops, something went wrong'
			}

			toast.success('product successfully updated')
			router.replace('/dashboard/products')
		} catch (error) {
			toast.error(error as string)
		}
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const imageUrl = URL.createObjectURL(file)
			setSelectedImage(imageUrl)
		}
	}

	const resetImage = () => {
		setSelectedImage(null)
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit}>
			<label>title</label>
			<input
				type='text'
				name='title'
				defaultValue={product?.title}
				placeholder='galaxy Se20'
			/>
			<div className='w-full'>
				{!selectedImage && (
					<label className='inline-flex w-16 h-16 text-3xl bg-backgroundSoft text-foregroundSoft items-center justify-center text-center cursor-pointer border border-backgroundAdd'>
						+
						<input
							type='file'
							accept='image/*'
							onChange={handleImageChange}
							className='hidden'
						/>
					</label>
				)}
				{selectedImage && product?.image && (
					<div className='relative w-16 h-16'>
						<Image
							src={selectedImage}
							alt='selected-image'
							sizes='w-16 h-16'
							fill
							className='border w-16 h-16 border-backgroundAdd object-cover'
						/>
						<button
							onClick={resetImage}
							className='absolute -top-2 -right-2 bg-backgroundAdd p-1 text-foreground border-none rounded-full'
						>
							<MdOutlineRemove size={17} />
						</button>
					</div>
				)}
			</div>
			<label>price</label>
			<input
				type='number'
				name='price'
				defaultValue={product?.price}
				placeholder='440.60'
			/>
			<label>brand</label>
			<input
				type='text'
				name='brand'
				defaultValue={product?.brand}
				placeholder='samsung'
			/>
			<label>model</label>
			<input
				type='text'
				name='model'
				defaultValue={product?.model}
				placeholder='se 20 fg'
			/>
			<label>color</label>
			<input
				type='text'
				name='color'
				defaultValue={product?.color}
				placeholder='Doe'
			/>
			<label>category</label>
			<select name='category' id='category' className='text-foregroundSoft'>
				{categories.length > 1 &&
					categories.map(category => (
						<option
							key={category}
							value={category}
							defaultValue={product?.category}
						>
							{category}
						</option>
					))}
			</select>
			<label>discount</label>
			<input
				type='number'
				name='discount'
				defaultValue={product?.discount}
				placeholder='11'
			/>
			<label>description</label>
			<textarea
				id='description'
				placeholder='description'
				value={descriptionState}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
					setDescriptionState(e.target.value)
				}
				rows={7}
			></textarea>
			<button className='button'>Submit</button>
		</form>
	)
}

export default ProductForm
