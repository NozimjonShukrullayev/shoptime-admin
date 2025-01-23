import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import {
	MdDashboard,
	MdShoppingBag,
	MdSupervisedUserCircle,
} from 'react-icons/md'
import MenuLink from './menuLink/MenuLink'

const menuItems = [
	{
		title: 'Pages',
		list: [
			{ title: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
			{
				title: 'Users',
				path: '/dashboard/users',
				icon: <MdSupervisedUserCircle />,
			},
			{
				title: 'Products',
				path: '/dashboard/products',
				icon: <MdShoppingBag />,
			},
		],
	},
]

const Sidebar = () => {
	return (
		<aside className='sticky top-10 h-screen max-h-screen'>
			<div className='flex items-center gap-5 mb-5'>
				<UserButton />
				<div className='flex flex-col'>
					<span className='text-sm text-foregroundSoft'>Adminstrator</span>
				</div>
			</div>
			<ul>
				{menuItems.map(item => (
					<li key={item.title}>
						<span className='text-foregroundSoft font-semibold text-sm inline-block my-3 mx-0'>
							{item.title}
						</span>
						{item.list.map(linkItem => (
							<MenuLink item={linkItem} key={linkItem.title} />
						))}
					</li>
				))}
			</ul>
			<div className='absolute bottom-16 left-5'>
				<Image
					src='/shoptime.png'
					alt='shoptime-logo'
					width={180}
					height={20}
					className='object-contain cursor-pointer'
				/>
			</div>
		</aside>
	)
}

export default Sidebar
