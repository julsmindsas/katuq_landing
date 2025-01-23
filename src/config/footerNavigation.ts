// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText?: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Katuq',
		// aboutText:'',
		logo: {
			src: '/logocompleto.png',
			alt: 'The tailwind astro theme',
			text: ''
		}
	},
	footerColumns: [
		{
			category: 'Productos',
			subCategories: [
				// {
				// 	subCategory: 'Features',
				// 	subCategoryLink: '/features'
				// },
				// {
				// 	subCategory: 'FAQ',
				// 	subCategoryLink: '/faq'
				// },
				{
					subCategory: 'Precios',
					subCategoryLink: '/pricing'
				},
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				// {
				// 	subCategory: 'Terms',
				// 	subCategoryLink: '/terms'
				// }
			]
		},
		{
			category: 'Acerca de nosotros',
			subCategories: [
				{
					subCategory: 'Nosotros',
					subCategoryLink: '/'
				}
				// {
				// 	subCategory: 'News',
				// 	subCategoryLink: '/blog'
				// },
				// {
				// 	subCategory: 'Careers',
				// 	subCategoryLink: '/blog'
				// }
			]
		},
		{
			category: 'Póngase en contacto',
			subCategories: [
				{
					subCategory: 'Contactenos',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Soporte',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Únete a nosotros',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Katuq 2024.'
	}
}
