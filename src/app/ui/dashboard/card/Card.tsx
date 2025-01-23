'use client'

import { CardElementsType } from '@/app/interfaces'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
import CountUp from 'react-countup'

const Card: FC<CardElementsType> = ({ count, title, icon, color }) => {
	ChartJS.register(ArcElement, Tooltip, Legend)

	const data = {
		labels: ['Orange'],
		datasets: [
			{
				data: [100],
				backgroundColor: [color],
				borderWidth: 0,
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
		},
		circumference: count,
		rotation: 0,
	}

	return (
		<div className='w-full bg-background flex justify-between items-center gap-7 border border-backgroundAdd py-5 px-7 rounded-md cursor-pointer hover:bg-backgroundSoft transition'>
			{icon}
			<div className='flex flex-col gap-5'>
				<span className='text-foregroundSoft'>{title}</span>
				<span className='font-medium text-2xl'>
					<CountUp end={count} />
				</span>
			</div>
			<div className='w-24 h-24'>
				<Doughnut data={data} options={options} />
			</div>
		</div>
	)
}

export default Card
