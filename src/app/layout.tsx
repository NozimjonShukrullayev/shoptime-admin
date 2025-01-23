import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import Provider from './provider'

const openSans = Open_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Shoptime admin',
	description: 'Shoptime admin your manager',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider signInUrl='/sign-in'>
			<html lang='en'>
				<body className={`${openSans.className} antialiased overflow-x-hidden`}>
					<Provider>
						{children}
						<ToastContainer />
					</Provider>
				</body>
			</html>
		</ClerkProvider>
	)
}
