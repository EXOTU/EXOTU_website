# Updating the Site URL

This guide explains how to change the website URL when your domain changes.

## Quick Steps

1. **Update Environment Variable** (`.env.local` or Vercel)
2. **Update Static Files** (`sitemap.xml` and `robots.txt`)
3. **Update Site Config** (`src/config/site.ts`) - Optional, for React components

## Detailed Instructions

### 1. Environment Variable (Primary Method)

The site URL is primarily controlled by the `VITE_SITE_URL` environment variable.

#### For Local Development

Edit `.env.local`:
```env
VITE_SITE_URL=https://your-new-domain.com
```

#### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Find or add `VITE_SITE_URL`
4. Set the value to your new domain (e.g., `https://exotu.ca`)
5. Redeploy your site

**Note**: After changing environment variables, you must redeploy for changes to take effect.

### 2. Update Static Files

These files need to be updated manually when the domain changes:

#### `public/sitemap.xml`

Replace all instances of the old URL with the new one:
- Find: `https://exotu-website.vercel.app`
- Replace: `https://your-new-domain.com`

#### `public/robots.txt`

Update the Sitemap URL:
```
Sitemap: https://your-new-domain.com/sitemap.xml
```

### 3. Update Site Configuration (Optional)

If you need to change other site settings, edit `src/config/site.ts`:

```typescript
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://your-new-domain.com';
```

The `VITE_SITE_URL` environment variable takes precedence, so you typically don't need to change this file.

## What Gets Updated Automatically

When you update `VITE_SITE_URL`, these are automatically updated at build time:

- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ Canonical URLs
- ✅ Structured Data (JSON-LD) schemas
- ✅ All references in React components

## What Needs Manual Updates

These files must be updated manually:

- ❌ `public/sitemap.xml` - All URL entries
- ❌ `public/robots.txt` - Sitemap URL

## Testing Your Changes

After updating:

1. **Build locally** to test:
   ```bash
   npm run build
   ```

2. **Check the built HTML** in `dist/index.html`:
   - Verify meta tags have the correct URL
   - Check structured data JSON-LD

3. **Verify static files**:
   - Check `dist/sitemap.xml`
   - Check `dist/robots.txt`

## Common Scenarios

### Moving from Vercel Preview to Custom Domain

1. Set `VITE_SITE_URL` in Vercel environment variables to your custom domain
2. Update `sitemap.xml` and `robots.txt`
3. Redeploy

### Development vs Production

Use different values:
- **Local**: `http://localhost:5173` (in `.env.local`)
- **Production**: `https://exotu.ca` (in Vercel environment variables)

Vercel automatically uses the correct environment variable based on the deployment environment.

## Troubleshooting

### URLs Still Show Old Domain

1. **Clear build cache**: Delete `dist/` and `node_modules/.vite/`
2. **Rebuild**: `npm run build`
3. **Check environment variable**: Verify `VITE_SITE_URL` is set correctly
4. **Redeploy**: If on Vercel, trigger a new deployment

### Meta Tags Not Updating

- Ensure you're using `%VITE_SITE_URL%` in `index.html` (already done)
- Check that the environment variable is set
- Rebuild the project

## Current Configuration

- **Current URL**: `https://exotu-website.vercel.app`
- **Config File**: `src/config/site.ts`
- **Environment Variable**: `VITE_SITE_URL`

## Next Steps

After updating the URL:

1. Submit updated sitemap to Google Search Console
2. Update any external links pointing to your site
3. Test social media sharing (Open Graph tags)
4. Verify structured data in Google's Rich Results Test

