import { JSX } from 'react'

export interface SidebarMenuItemType {
	item: { title: string; path: string; icon: JSX.Element }
}

export interface CardElementsType {
	title: string
	color: string
	count: number
	icon: JSX.Element
}

export interface SearchPlaceholderType {
	placeholder: string
}

export interface ProductsType {
	products: ProductType[]
}

export interface SingleProductType {
	product: ProductType
}

export interface ProductType {
	title: string
	desciption: string
	id: number
	image: string
	price: number
	brand: string
	model: string
	color?: string
	category: string
	popular?: boolean
	discount?: number
}

export interface UsersType {
	users: UserType[]
}

export interface SingleUserType {
	user: UserType
}

export interface UserType {
	id: number
	email: string
	username: string
	name: { firstname: string; lastname: string }
	avatar: string
	password: string
	creationAt: Date
	updatedAt: Date
	role: string
	address: {
		city: string
		street: string
		number: string
		zipcode: string
		geolocation: {
			lat: number
			long: number
		}
	}
	phone: string
}
