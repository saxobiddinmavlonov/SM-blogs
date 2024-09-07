import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://sm-blog.ac'),
	title: ' Programming Articles',
	description:
		'Programming news, tips, and the latest programming news. You can find a guide to learning and developing programming on our blog.',
	authors: [{ name: 'Saxobiddin Mavlonov', url: 'https://sammi.ac' }],
	icons: { icon: '/favicon.png' },
	keywords:
		'saxobiddin mavlonov, programming courses, programming lessons, reactjs in Uzbek, vuejs in Uzbek, redux in Uzbek, sammi, sammi academy, free programming, resume writing, portfolio, sammi javascript, sammi digital generation, javascript, reactjs, vuejs, javascript lessons, reactjs lessons, vuejs lessons, programming lessons, programming in Uzbek, reactjs in Uzbek, reactjs lessons in Uzbek, javascript lessons, javascript lessons in Uzbek, programming lessons in Uzbek, learn programming learning, programming, IT projects in Uzbek',
	openGraph: {
		title: 'Programming Articles',
		description:
			'Programming news, tips, and the latest programming news. You can find a guide to learning and developing programming on our blog.',
		type: 'website',
		url: 'https://sm-blog.ac',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'SM-Blogs',
		emails: 'info@sm-blog.ac',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='blog-theme'
				>
					<NextTopLoader showSpinner={false} />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
