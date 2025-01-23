import { SearchPlaceholderType } from '@/app/interfaces'
import { FC } from 'react'
import { MdSearch } from 'react-icons/md'

const Search: FC<SearchPlaceholderType> = ({ placeholder }) => {
	return (
		<div className='flex items-center bg-background rounded-md border border-backgroundAdd py-1.5 px-4 gap-2 w-3/5'>
			<MdSearch size={27} />
			<input
				type='text'
				placeholder={placeholder}
				className='bg-transparent border-none text-foreground outline-none text-base'
			/>
		</div>
	)
}

export default Search
