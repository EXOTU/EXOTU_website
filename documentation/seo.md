# SEO Optimization Guide

This document outlines the SEO optimizations implemented for the EXOTU website and how to maintain them.

## Implemented SEO Features

### 1. Meta Tags

The website includes comprehensive meta tags in `index.html`:

- **Primary Meta Tags**: Title, description, keywords, author, robots
- **Open Graph Tags**: For better social media sharing (Facebook, LinkedIn)
- **Twitter Cards**: Optimized Twitter sharing
- **Canonical URL**: Prevents duplicate content issues

### 2. Structured Data (JSON-LD)

Schema.org structured data is included for:
- **Organization**: Company/organization information
- **WebSite**: Website search functionality

This helps search engines understand your content better and can result in rich snippets in search results.

### 3. robots.txt

Located at `public/robots.txt`, this file tells search engines which pages to crawl and where to find the sitemap.

### 4. sitemap.xml

Located at `public/sitemap.xml`, this helps search engines discover and index all pages on your site.

### 5. Image Alt Text

All images throughout the site include descriptive alt text for accessibility and SEO.

## Important: Update URLs Before Deployment

**Before deploying to production**, you must update the following URLs in `index.html`:

1. **Canonical URL** (line 36):
   ```html
   <link rel="canonical" href="https://exotu.ca/" />
   ```
   Replace `https://exotu.ca/` with your actual domain.

2. **Open Graph URLs** (lines 20, 23):
   ```html
   <meta property="og:url" content="https://exotu.ca/" />
   <meta property="og:image" content="https://exotu.ca/images/og-image.jpg" />
   ```

3. **Twitter URLs** (lines 29, 32):
   ```html
   <meta property="twitter:url" content="https://exotu.ca/" />
   <meta property="twitter:image" content="https://exotu.ca/images/og-image.jpg" />
   ```

4. **Structured Data URLs** (in JSON-LD scripts):
   - Update `url` fields in both JSON-LD scripts
   - Update `logo` URL if you have a logo image
   - Update social media links in `sameAs` array
   - Update contact email if different

5. **sitemap.xml**: Update all `https://exotu.ca/` URLs with your actual domain

6. **robots.txt**: Update the Sitemap URL

## Creating an Open Graph Image

Create an image for social media sharing:
- **Recommended size**: 1200x630 pixels
- **Format**: JPG or PNG
- **Location**: `public/images/og-image.jpg`
- **Content**: Should include EXOTU logo, tagline, and be visually appealing

## Social Media Links

Update the social media links in the structured data (`sameAs` array) with your actual profiles:
- LinkedIn company page
- Twitter/X account
- GitHub organization
- Any other social media profiles

## Maintaining SEO

### Regular Updates

1. **Update sitemap.xml** when adding new pages:
   - Add new `<url>` entries
   - Update `<lastmod>` dates when content changes

2. **Keep content fresh**: Search engines favor regularly updated content

3. **Monitor performance**: Use Google Search Console to track:
   - Search rankings
   - Click-through rates
   - Indexing status
   - Search queries

### Best Practices

1. **Content Quality**: 
   - Write clear, descriptive content
   - Use proper heading hierarchy (H1, H2, H3)
   - Include relevant keywords naturally

2. **Page Speed**:
   - Optimize images (compress, use appropriate formats)
   - Minimize JavaScript and CSS
   - Use lazy loading for images

3. **Mobile Optimization**:
   - Already implemented with responsive design
   - Test on various devices

4. **Internal Linking**:
   - Link between related pages
   - Use descriptive anchor text

5. **External Links**:
   - Link to reputable sources
   - Use `rel="nofollow"` for untrusted links if needed

## Google Search Console Setup

1. **Verify ownership**:
   - Add your site to Google Search Console
   - Verify using HTML tag, DNS, or file upload

2. **Submit sitemap**:
   - Go to Sitemaps section
   - Submit `https://yourdomain.com/sitemap.xml`

3. **Monitor**:
   - Check for indexing issues
   - Review search performance
   - Fix any errors or warnings

## Additional SEO Tools

Consider using:
- **Google Analytics**: Track visitor behavior
- **Google Search Console**: Monitor search performance
- **Bing Webmaster Tools**: For Bing search optimization
- **PageSpeed Insights**: Test and improve page speed

## Keywords to Target

Primary keywords:
- EXOTU
- Exoskeleton Technology at University
- Ontario Tech University exoskeleton
- Powered exoskeleton
- Human augmentation
- Student robotics team
- Exoskeleton design team

Long-tail keywords:
- "exoskeleton design team Ontario Tech"
- "student exoskeleton project"
- "powered exoskeleton research"
- "human augmentation technology"

## Next Steps

1. Update all URLs with your actual domain
2. Create and add the Open Graph image
3. Update social media links
4. Submit sitemap to Google Search Console
5. Set up Google Analytics
6. Monitor and optimize based on performance data

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards)

