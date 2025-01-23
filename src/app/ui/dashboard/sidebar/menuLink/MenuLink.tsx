'use client'

import { SidebarMenuItemType } from '@/app/interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const MenuLink: FC<SidebarMenuItemType> = ({ item }) => {
	const pathname: string = usePathname()

	return (
		<Link
			href={item.path}
			className={`py-4 px-6 my-1.5 text-lg flex items-center gap-3 transition rounded-xl hover:bg-backgroundAdd ${
				pathname === item.path
					? 'bg-backgroundAdd'
					: pathname.split('/').slice(0, 3).join('/') === item.path
					? 'bg-backgroundAdd'
					: 'bg-transparent'
			}`}
		>
			{item.icon}
			{item.title}
		</Link>
	)
}

export default MenuLink
