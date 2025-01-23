'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
	const pathname = usePathname()

	return (
		<header className='flex justify-between bg-background items-center p-5 rounded-md border border-backgroundAdd'>
			<div className='font-semibold capitalize'>
				{pathname.split('/').pop()}
			</div>
			<Link
				href={'/'}
				className='flex items-center gap-1.5 font-semibold capitalize'
			>
				Shoptime
				<Image
					src={'/favicon.ico'}
					alt='logo'
					width={25}
					height={25}
					sizes='w-25 h-25'
				/>
			</Link>
		</header>
	)
}

export default Navbar
