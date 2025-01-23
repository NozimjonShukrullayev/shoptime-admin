'use client'

import { SignOutButton, useAuth } from '@clerk/nextjs'
import { MdLogout } from 'react-icons/md'

const SignOut = () => {
	const { sessionId } = useAuth()

	if (!sessionId)
		return (
			<button className='py-4 px-6 my-1.5 text-lg flex items-center gap-3 transition rounded-xl w-full hover:bg-backgroundAdd cursor-pointer'>
				<MdLogout />
				Logout
			</button>
		)

	if (sessionId)
		return (
			<SignOutButton>
				<button className='py-4 px-6 my-1.5 text-lg flex items-center gap-3 transition rounded-xl w-full hover:bg-backgroundAdd cursor-pointer'>
					<MdLogout />
					Logout
				</button>
			</SignOutButton>
		)
}

export default SignOut
