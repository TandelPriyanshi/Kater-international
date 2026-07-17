/**
 * Generates robots.txt and sitemap.xml. Uses SITE_URL from ./site-url.js (single place to change).
 * Run before build: npm run seo:generate (or it runs automatically via build)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE_URL } from './site-url.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const baseUrl = SITE_URL.replace(/\/$/, '');

const robotsTxt = `# Kater International - Allow search engines to crawl the site
User-agent: *
Allow: /

# Sitemap (generated from scripts/site-url.js)
Sitemap: ${baseUrl}/sitemap.xml
`;

const lastmod = new Date().toISOString().split('T')[0];

const productsMap = {
  'agrochemicals': [
    'ammonium-sulphate', 'aluminium-chloride', 'boric-acid', 'borax-pentahydrate', 'borax-decahydrate',
    'calcium-chloride', 'copper-sulphate', 'chelated-edta', 'ferrous-sulphate', 'magnesium-sulphate',
    'magnesium-chloride', 'magnesium-oxide', 'manganese-sulphate', 'potassium-chloride', 'sulphur',
    'urea', 'zinc-sulphate-monohydrate', 'zinc-sulphate-heptahydrate'
  ],
  'water-treatment-chemicals': [
    'aluminium-chlorohydrate', 'activated-carbon', 'antiscalants', 'aluminium-sulphate', 'biocides',
    'calcium-hypochlorite', 'choline-chloride', 'ferric-chloride', 'hydrogen-peroxide', 'polyaluminium-chloride',
    'polyacrylamide', 'sulphamic-acid', 'sodium-sulphite', 'sodium-bisulphite', 'sodium-metabisulphite',
    'sodium-hypochlorite', 'tcca'
  ],
  'acid-solvents': [
    'hydrochloric-acid', 'sulphuric-acid', 'nitric-acid', 'phosphoric-acid', 'ethyl-acetate',
    'benzyl-alcohol', 'benzyl-chloride', 'benzaldehyde', 'isopropyl-alcohol', 'methylene-dichloride',
    'methyl-isobutyl-ketone'
  ],
  'other-chemicals': [
    'caustic-soda', 'chlorinated-paraffin', 'epichlorohydrin', 'petroleum-jelly', 'potassium-permanganate',
    'sodium-nitrate', 'sodium-nitrite', 'sodium-sulphate', 'soda-ash'
  ],
  'surfactants': [
    'ammonium-lauryl-ether-sulphate', 'ammonium-lauryl-sulphate', 'alpha-olefin-sulphonate', 'benzalkonium-chloride', 'cocoamidopropyl-betaine',
    'cocomonoethanolamide', 'cocodiethanolamide', 'linear-alkyl-benzene-sulphonic-acid', 'sodium-lauryl-sulphate', 'sodium-lauryl-ether-sulphate',
    'all-ethoxylates'
  ],
  'castor-oil-derivatives': [
    'castor-oil-fsg-pp', 'hydrogenated-castor-oil', '12-hydroxy-stearic-acid', 'dehydrated-castor-oil', 'ricinoleic-acid',
    'turkey-red-oil'
  ]
};

const urls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about-us', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products', changefreq: 'weekly', priority: '0.9' },
  { loc: '/services', changefreq: 'monthly', priority: '0.8' },
  { loc: '/career', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/agrochemicals', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/water-treatment-chemicals', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/acid-solvents', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/other-chemicals', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/surfactants', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/castor-oil-derivatives', changefreq: 'monthly', priority: '0.7' },
  // Individual product pages (category/product)
  ...Object.keys(productsMap).flatMap((cat) => {
    const products = productsMap[cat] || [];
    return products.map((p) => ({ loc: `/products/${cat}/${p}`, changefreq: 'monthly', priority: '0.6' }));
  }),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.join(root, 'public');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);

console.log('[SEO] Generated robots.txt and sitemap.xml with base URL:', baseUrl);
