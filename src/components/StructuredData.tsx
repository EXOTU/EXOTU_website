import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT_EMAIL, SOCIAL_LINKS, LOGO_PATH } from '../config/site';

/**
 * Structured Data component for SEO
 * Injects JSON-LD schema markup into the page
 */
export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'Exoskeleton Technology at University',
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_PATH}`,
    description: SITE_DESCRIPTION,
    foundingDate: '2025',
    founders: [
      { '@type': 'Person', name: 'Wadee Al-Wahedy' },
      { '@type': 'Person', name: 'Muhammad Saad' },
      { '@type': 'Person', name: 'Safwan Sabbir' },
      { '@type': 'Person', name: 'Abdullah Al-Salihi' },
    ],
    memberOf: {
      '@type': 'EducationalOrganization',
      name: 'Ontario Tech University',
    },
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.github,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General Inquiry',
      email: CONTACT_EMAIL,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

