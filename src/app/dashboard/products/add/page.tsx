'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { MdOutlineRemove } from 'react-icons/md'
import { toast } from 'react-toastify'

const AddProductPage = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [categories, setCategories] = useState<string[]>([''])
	const formRef = useRef<HTMLFormElement | null>(null)
	const router = useRouter()

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		const file = e.target.files?.[0]
		if (file) {
			const imageUrl = URL.createObjectURL(file)
			setSelectedImage(imageUrl)
		}
	}

	const getCategories = async () => {
		const res = await fetch('https://fakestoreapi.in/api/products/category')
		const { categories }: { categories: string[] } = await res.json()
		setCategories(categories)
	}
	useEffect(() => {
		getCategories()
	}, [])

	const resetImage = () => {
		setSelectedImage(null)
	}

	const sendData = async () => {
		if (!formRef.current) return
		const formData = new FormData(formRef.current)

		try {
			const res = await fetch('https://fakestoreapi.in/api/products', {
				method: 'POST',
				body: formData,
			})

			if (!res.ok) {
				throw 'oops, something went wrong!'
			}

			formRef.current.reset()
			setSelectedImage(null)
			toast.success('product succesfully created')
			router.replace('/dashboard/products')
		} catch (error) {
			toast.error(error as string)
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		sendData()
	}

	return (
		<div className='bg-background border border-backgroundAdd p-5 rounded mt-7'>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='flex flex-wrap justify-between'
			>
				<input type='text' placeholder='title' name='title' required />
				<div className='w-[45%]'>
					{!selectedImage && (
						<label className='inline-flex w-16 h-16 text-3xl bg-backgroundSoft text-foregroundSoft items-center justify-center text-center cursor-pointer border border-backgroundAdd'>
							+
							<input
								type='file'
								accept='image/*'
								onChange={handleImageChange}
								placeholder='image'
								name='image'
								className='hidden'
							/>
						</label>
					)}
					{selectedImage && (
						<div className='relative w-16'>
							<Image
								src={selectedImage}
								alt='selected-image'
								width={16}
								height={16}
								className='w-16 h-16 border border-backgroundAdd object-cover'
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
				<input type='number' placeholder='price' name='price' required />
				<input type='text' placeholder='brand' name='brand' required />
				<input type='text' placeholder='model' name='model' required />
				<input type='text' placeholder='color' name='color' />
				<select name='category' id='category' className='text-foreground'>
					<option value='general' className='hidden'>
						choose a category
					</option>
					{categories.length > 1 &&
						categories.map(category => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
				</select>
				<input type='number' placeholder='discount' name='discount' />
				<textarea
					className=''
					name='description'
					id='description'
					placeholder='description'
					rows={7}
				></textarea>
				<button className='button'>Submit</button>
			</form>
		</div>
	)
}

export default AddProductPage
