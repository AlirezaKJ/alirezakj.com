const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Alireza Karimi Jafari',
	alternateName: 'AlirezaKJ',
	url: 'https://alirezakj.com',
	image: 'https://alirezakj.com/assets/images/Portrait%20Cropped.jpg',
	jobTitle: 'Web Developer & Photographer',
	email: 'akarimijafari@gmail.com',
	telephone: '+61410372577',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Melbourne',
		addressRegion: 'VIC',
		addressCountry: 'AU'
	},
	alumniOf: {
		'@type': 'CollegeOrUniversity',
		name: 'Swinburne University of Technology'
	},
	knowsAbout: [
		'Web Development',
		'SvelteKit',
		'React',
		'Tailwind CSS',
		'UI/UX Design',
		'Cybersecurity',
		'Photography'
	],
	sameAs: ['https://github.com/AlirezaKJ', 'https://www.linkedin.com/in/alirezakj/']
};

export const load = () => ({
	seo: {
		title: 'Alireza Karimi Jafari - Web Developer & Photographer in Melbourne',
		description:
			'Full-stack web developer and UI/UX designer based in Melbourne, Australia. Building fast, modern websites and apps with SvelteKit, React, and Tailwind CSS. Available for freelance projects.',
		type: 'profile',
		jsonld: personSchema
	}
});
