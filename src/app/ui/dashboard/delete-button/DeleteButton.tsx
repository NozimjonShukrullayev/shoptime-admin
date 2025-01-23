'use client'

import { FC } from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { toast } from 'react-toastify'

interface PageProps {
	id: number
	url: string
}

const DeleteButton: FC<PageProps> = ({ id, url }) => {
	const deleteProductHandler = async (id: number) => {
		if (confirm('are you sure?')) {
			try {
				const res = await fetch(`https://fakestoreapi.in/api/${url}/${id}`, {
					method: 'DELETE',
				})
				if (!res.ok) {
					throw 'element not have been deleted'
				}

				toast.success('successfully deleted')
			} catch (error) {
				toast.error(error as string)
			}
		}
	}

	return (
		<button
			onClick={() => deleteProductHandler(id)}
			className='border border-red-700 p-1.5'
		>
			<MdOutlineDelete size={18} />
		</button>
	)
}

export default DeleteButton
