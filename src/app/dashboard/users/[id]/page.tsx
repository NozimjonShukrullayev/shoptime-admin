import { SingleUserType } from '@/app/interfaces'
import UserForm from '@/app/ui/dashboard/user-form/UserForm'

const UserDetailedPage = async ({
	params,
}: {
	params: Promise<{ id: string }>
}) => {
	try {
		const id = (await params).id

		const res = await fetch(`https://fakestoreapi.in/api/users/${id}`)
		const { user }: SingleUserType = await res.json()

		return (
			<div
				id='users-detailed'
				className='bg-background p-5 rounded border border-backgroundAdd my-7'
			>
				<div className='border border-backgroundAdd p-5'>
					<UserForm user={user} />
				</div>
			</div>
		)
	} catch (error) {
		;<div>{error as string}</div>
	}
}

export default UserDetailedPage
