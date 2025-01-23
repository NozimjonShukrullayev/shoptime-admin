'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

const AddProductPage = () => {
	const router = useRouter()
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
		firstname: '',
		lastname: '',
		city: '',
		street: '',
		number: '',
		zipcode: '',
		lat: '',
		long: '',
		phone: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const payload = {
			email: formData.email,
			username: formData.username,
			password: formData.password,
			name: {
				firstname: formData.firstname,
				lastname: formData.lastname,
			},
			address: {
				city: formData.city,
				street: formData.street,
				number: formData.number,
				zipcode: formData.zipcode,
				geolocation: {
					lat: parseFloat('55'),
					long: parseFloat('40'),
				},
			},
			phone: formData.phone,
		}

		try {
			const response = await fetch('https://fakestoreapi.in/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})

			if (!response.ok) {
				throw 'oops, something went wrong!'
			}
			toast.success('user succesfully created')

			setFormData({
				email: '',
				username: '',
				password: '',
				firstname: '',
				lastname: '',
				city: '',
				street: '',
				number: '',
				zipcode: '',
				lat: '',
				long: '',
				phone: '',
			})
			router.replace('/dashboard/users')
		} catch (error) {
			toast.error(error as string)
		}
	}

	return (
		<div className='bg-background border border-backgroundAdd p-5 rounded mt-7'>
			<form onSubmit={handleSubmit} className='flex flex-wrap justify-between'>
				<input
					type='email'
					placeholder='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					placeholder='username'
					name='username'
					value={formData.username}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					placeholder='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					placeholder='firstname'
					name='firstname'
					value={formData.firstname}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					placeholder='lastname'
					name='lastname'
					value={formData.lastname}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='city'
					value={formData.city}
					onChange={handleChange}
					name='city'
				/>
				<input
					type='text'
					placeholder='street'
					name='street'
					value={formData.street}
					onChange={handleChange}
				/>
				<input
					type='number'
					placeholder='number'
					name='number'
					value={formData.number}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='zipcode'
					name='zipcode'
					value={formData.zipcode}
					onChange={handleChange}
				/>
				<input
					type='tel'
					name='phone'
					placeholder='777 090780'
					id='phone'
					className='w-[45%] ml-2'
					value={formData.phone}
					onChange={handleChange}
				/>
				<button type='submit' className='button'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default AddProductPage
