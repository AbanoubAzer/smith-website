// src/pages/sitemap.xml.ts
// Dynamic XML sitemap for all pages
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/ar/', priority: '1.0', changefreq: 'weekly' },
  { url: '/products/', priority: '0.9', changefreq: 'weekly' },
  { url: '/products/doors/', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/windows/', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/outdoor/', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/metalwork/', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/kitchens/', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/stone/', priority: '0.8', changefreq: 'monthly' },
  { url: '/global-sourcing/', priority: '0.8', changefreq: 'monthly' },
  { url: '/our-network/', priority: '0.7', changefreq: 'monthly' },
  { url: '/about/', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.9', changefreq: 'monthly' },
  // Arabic versions
  { url: '/ar/products/', priority: '0.9', changefreq: 'weekly' },
  { url: '/ar/global-sourcing/', priority: '0.8', changefreq: 'monthly' },
  { url: '/ar/our-network/', priority: '0.7', changefreq: 'monthly' },
  { url: '/ar/about/', priority: '0.7', changefreq: 'monthly' },
  { url: '/ar/contact/', priority: '0.9', changefreq: 'monthly' },
];

const baseUrl = 'https://abanoubazer.github.io/smith-website';
const today = new Date().toISOString().split('T')[0];

export const GET = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
