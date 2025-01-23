'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { FC, ReactNode } from 'react'
import { Client, HydrationProvider } from 'react-hydration-provider'

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<HydrationProvider>
			<Client>
				<div>
					{children}
					<ProgressBar
						height='4px'
						color='#00bfff'
						options={{ showSpinner: true }}
						shallowRouting
					/>
				</div>
			</Client>
		</HydrationProvider>
	)
}

export default Provider
