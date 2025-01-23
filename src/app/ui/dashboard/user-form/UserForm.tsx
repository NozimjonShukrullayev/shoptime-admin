'use client'

import { SingleUserType } from '@/app/interfaces'
import { useRouter } from 'next/navigation'
import { FC, useRef } from 'react'
import { toast } from 'react-toastify'

const UserForm: FC<SingleUserType> = ({ user }) => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!formRef.current) {
			console.error('Form element not found.')
			return
		}
		const formData = new FormData(formRef.current)
		const {
			email,
			username,
			password,
			firstname,
			lastname,
			city,
			street,
			number,
			zipcode,
			phone,
		} = Object.fromEntries(formData)

		try {
			const res = await fetch(`https://fakestoreapi.in/api/users/${user.id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					username,
					password,
					name: {
						firstname,
						lastname,
					},
					address: {
						city,
						street,
						number,
						zipcode,
						geolocation: {
							lat: 18.818,
							long: 18.181818,
						},
					},
					phone,
				}),
			})

			if (!res.ok) {
				throw 'ooops, something went wrong'
			}

			toast.success('user successfully updated')
			router.replace('/dashboard/users')
		} catch (error) {
			toast.error(error as string)
		}
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit}>
			<label>email</label>
			<input
				type='email'
				name='email'
				defaultValue={user.email}
				placeholder='info@gamil.com'
			/>
			<label>username</label>
			<input
				type='text'
				name='username'
				defaultValue={user.username}
				placeholder='johnsmith'
			/>
			<label>password</label>
			<input
				type='text'
				name='password'
				defaultValue={user.password}
				placeholder='W1235502'
			/>
			<label>firstname</label>
			<input
				type='text'
				name='firstname'
				defaultValue={user.name.firstname}
				placeholder='John'
			/>
			<label>lastname</label>
			<input
				type='text'
				name='lastname'
				defaultValue={user.name.lastname}
				placeholder='Doe'
			/>
			<label>city</label>
			<input
				type='text'
				name='city'
				defaultValue={user.address.city}
				placeholder='London'
			/>
			<label>street</label>
			<input
				type='text'
				name='street'
				defaultValue={user.address.street}
				placeholder='best street'
			/>
			<label>number</label>
			<input
				type='text'
				name='number'
				defaultValue={user.address.number}
				placeholder='40'
			/>
			<label>zipcode</label>
			<input
				type='text'
				name='zipcode'
				defaultValue={user.address.zipcode}
				placeholder='790'
			/>
			<label>phone</label>
			<input
				type='tel'
				name='phone'
				defaultValue={user.phone}
				placeholder='45081808'
			/>
			<button className='button'>Submit</button>
		</form>
	)
}

export default UserForm
