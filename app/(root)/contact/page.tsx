import ContactForm from '@/components/forms/contact'
import { Dot, Home, Mail } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Contact us',
}

function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mb-5'>
					<span>Contact</span>
				</h2>

				<div className='flex gap-1 items-center mb-6'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Contact</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-3xl font-creteRound'>Contact SM-Blogs</h1>
					<p className='mt-2 text-muted-foreground'>
						I am here to help and answer any queation you might have. I look
						forward to hearning from you{' '}
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>info@sm-blogs.ac</p>
					</div>
					<div className='mt-2 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>+998942170607</p>
					</div>
				</div>

				<div>
					<h1 className='text-3xl font-creteRound mb-2'>Contact </h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
