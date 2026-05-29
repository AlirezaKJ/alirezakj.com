const SITE_URL = 'https://alirezakj.com';

const pages = [
	{ path: '/', changefreq: 'monthly', priority: '1.0' },
	{ path: '/bsc', changefreq: 'weekly', priority: '0.8' }
];

export const prerender = true;

export function GET() {
	const lastmod = new Date().toISOString().split('T')[0];

	const urls = pages
		.map(
			({ path, changefreq, priority }) => `	<url>
		<loc>${SITE_URL}${path}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
