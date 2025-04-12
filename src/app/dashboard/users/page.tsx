import { UsersType } from '@/app/interfaces'
import DeleteButton from '@/app/ui/dashboard/delete-button/DeleteButton'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineEdit } from 'react-icons/md'

const UsersPage = async () => {
	try {
		const res = await fetch(`https://fakestoreapi.in/api/users?limit=40`)
		const { users }: UsersType = await res.json()

		return (
			<div className='bg-background p-5 mt-5 border border-backgroundAdd'>
				<div className='flex items-center justify-between bg-background mb-7'>
					<Link
						href={'/dashboard/users/add'}
						className='py-2 px-5 rounded bg-button'
					>
						Add new
					</Link>
				</div>
				<table className='w-full p-1 border border-backgroundAdd'>
					<thead className='border-b border-backgroundAdd'>
						<tr>
							<td></td>
							<td>Name</td>
							<td>Email</td>
							<td>City</td>
							<td>Phone</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{users
							.sort((a, b) => a.username.localeCompare(b.username))
							.map((user, idx) => (
								<tr key={user.id}>
									<td>{idx + 1}</td>
									<td>
										<div className='flex gap-2 items-center'>
											<Image
												src={user.avatar || '/noavatar.png'}
												alt='user-img'
												width={40}
												height={40}
												sizes='w-10 h-10'
												className='rounded object-cover'
											/>
											{user.username}
										</div>
									</td>
									<td>{user.email}</td>
									<td>{user.address.city}</td>
									<td>{user.phone}</td>
									<td className='w-12'>
										<div className='flex gap-1 items-center'>
											<Link
												href={`/dashboard/users/${user.id}`}
												className='border border-button p-1.5'
											>
												<MdOutlineEdit size={18} />
											</Link>
											<DeleteButton id={user.id} url='users' />
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

export default UsersPage
