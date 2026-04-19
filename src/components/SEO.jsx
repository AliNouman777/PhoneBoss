import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://phoneboss.vercel.app'
const DEFAULT_IMG = `${SITE_URL}/logo.png`

export default function SEO({
  title       = 'PhoneBoss – Expert Phone Repair UK | Screen, Battery & More',
  description = 'PhoneBoss offers fast, affordable phone repairs across the UK. Screen replacements from £29.99, same-day service, 12-month warranty. No fix, no fee. Portsmouth, Exeter & Cambridge.',
  canonical   = SITE_URL,
  type        = 'website',
}) {
  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords"    content="phone repair UK, screen repair, battery replacement, iPhone repair, Samsung repair, cracked screen, phone fix near me, same day phone repair, PhoneBoss, Portsmouth phone repair, Exeter phone repair, Cambridge phone repair" />
      <meta name="robots"      content="index, follow" />
      <link rel="canonical"    href={canonical} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={type} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={DEFAULT_IMG} />
      <meta property="og:site_name"   content="PhoneBoss" />
      <meta property="og:locale"      content="en_GB" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={DEFAULT_IMG} />

      {/* ── LocalBusiness JSON-LD structured data ── */}
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': SITE_URL,
        name: 'PhoneBoss',
        description: 'Expert phone repair service across the UK. Screen replacements, battery replacements, water damage, camera repair and more. Same-day service with a 12-month warranty.',
        url: SITE_URL,
        telephone: '+447876660020',
        email: 'mr.shad@live.co.uk',
        priceRange: '££',
        image: DEFAULT_IMG,
        logo: DEFAULT_IMG,
        sameAs: ['https://www.instagram.com/phoneboss_tv/'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '17:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Phone Repair Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Screen Repair'       }, price: '29.99', priceCurrency: 'GBP' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Battery Replacement'  }, price: '19.99', priceCurrency: 'GBP' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Damage Repair'  }, price: '19.99', priceCurrency: 'GBP' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camera Repair'        }, price: '24.99', priceCurrency: 'GBP' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Charging Port Repair' }, price: '19.99', priceCurrency: 'GBP' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Recovery'        }, price: '19.99', priceCurrency: 'GBP' },
          ],
        },
        location: [
          {
            '@type': 'LocalBusiness',
            name: 'PhoneBoss Portsmouth',
            address: { '@type': 'PostalAddress', streetAddress: '191 Commercial Rd', addressLocality: 'Portsmouth', postalCode: 'PO1 1EA', addressCountry: 'GB' },
            telephone: '+447876660020',
          },
          {
            '@type': 'LocalBusiness',
            name: 'PhoneBoss Exeter',
            address: { '@type': 'PostalAddress', streetAddress: '235 High St', addressLocality: 'Exeter', postalCode: 'EX4 3NZ', addressCountry: 'GB' },
            telephone: '+447876660020',
          },
          {
            '@type': 'LocalBusiness',
            name: 'PhoneBoss Cambridge',
            address: { '@type': 'PostalAddress', streetAddress: '25 Petty Cury', addressLocality: 'Cambridge', postalCode: 'CB2 3NB', addressCountry: 'GB' },
            telephone: '+447876660020',
          },
        ],
      })}</script>
    </Helmet>
  )
}
