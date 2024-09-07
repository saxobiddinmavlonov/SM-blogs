export interface ChildProps {
	children: React.ReactNode
}

export interface IArchivedBlog {
	year: string
	blogs: IBlog[]
}

export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	image: { url: string }
	tag: ICategoryAndTags
	createdAt: string
	content: { html: string }
	slug: string
}

export interface IAuthor {
	image: { url: string }
	name: string
	bio: string
	blog: IBlog[]
	id: string
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blog: IBlog[]
	id: string
}
