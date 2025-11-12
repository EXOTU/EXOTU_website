// ============================================
// SITE CONFIGURATION
// Update this file to change the site URL and other site-wide settings
// ============================================

/**
 * The base URL of the website
 * Update this when the domain changes
 * 
 * Examples:
 * - Development: 'http://localhost:5173'
 * - Staging: 'https://exotu-website.vercel.app'
 * - Production: 'https://exotu.ca'
 */
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://exotu-website.vercel.app';

/**
 * Site name for meta tags and structured data
 */
export const SITE_NAME = 'EXOTU';

/**
 * Site description for meta tags
 */
export const SITE_DESCRIPTION = 'EXOTU is a student-led design team at Ontario Tech University dedicated to developing innovative powered exoskeleton technology. Join our team of engineers building the future of human augmentation.';

/**
 * Contact email
 */
export const CONTACT_EMAIL = 'info@exotu.ca';

/**
 * Social media links
 * Update these with your actual social media profiles
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/exotu',
  twitter: 'https://twitter.com/exotu',
  github: 'https://github.com/EXOTU',
};

/**
 * Open Graph image path
 * Should be relative to the public folder
 * Example: '/images/og-image.jpg'
 */
export const OG_IMAGE_PATH = '/images/og-image.jpg';

/**
 * Logo path
 * Should be relative to the public folder
 * Example: '/images/logo.png'
 */
export const LOGO_PATH = '/images/logo.png';

