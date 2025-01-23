import { redirect } from 'next/navigation'

const HomePage = () => {
	redirect('dashboard')
	// return <div className='background'>HomePage</div>
}

export default HomePage
