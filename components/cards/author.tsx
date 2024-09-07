import { IAuthor } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

function AuthorCard(authors: IAuthor) {
	return (
		<Link
			className='flex flex-col space-y-2 w-52 text-center'
			href={`/author/${authors.id}`}
		>
			<div className='w-full h-52 relative'>
				<Image
					src={authors.image.url}
					alt={authors.name}
					fill
					className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'
				/>
			</div>
			<h2 className='text-2xl font-creteRound '>{authors.name}</h2>
			<p className='text-muted-foreground'>
				<span className='font-bold text-white'>{authors.blog.length}</span>{' '}
				Published posts
			</p>
		</Link>
	)
}

export default AuthorCard
