import Image from 'next/image'
import { MdShoppingBag, MdSupervisedUserCircle } from 'react-icons/md'
import Card from '../ui/dashboard/card/Card'

const DashboardPage = () => {
	return (
		<div className='my-7'>
			<h1 className='text-2xl flex gap-5 justify-self-center items-center font-semibold pb-5'>
				Welcome to Shoptime admin!{' '}
				<Image src={'/favicon.ico'} alt='logo' width={35} height={35} />
			</h1>
			<div className='flex flex-col'>
				<div>
					<h3 className='text-lg mb-2'>Users</h3>
					<div className='flex gap-5 justify-between'>
						{Array.of(1, 2, 3).map(item => (
							<Card
								key={item}
								color='green'
								title='Total users'
								count={124}
								icon={<MdSupervisedUserCircle size={28} />}
							/>
						))}
					</div>
				</div>
				<div className='mt-6'>
					<h3 className='text-lg mb-2'>Products</h3>
					<div className='flex gap-5 justify-between'>
						{Array.of(1, 2, 3).map(item => (
							<Card
								key={item}
								color='#FFA500'
								title='Total Products'
								count={407}
								icon={<MdShoppingBag size={28} />}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardPage
