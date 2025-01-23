import Footer from '../ui/dashboard/footer/Footer'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'

const DashboardLayout = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className='flex'>
			<div className='flex-1 bg-background py-5 px-7'>
				<Sidebar />
			</div>
			<div className='flex-[4] bg-backgroundSoft py-5 px-7 min-h-screen'>
				<Navbar />
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default DashboardLayout
