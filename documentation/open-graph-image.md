# Open Graph Image Guide

## What is an Open Graph Image?

The Open Graph (OG) image is the preview image that appears when someone shares your website link on social media platforms like:
- Facebook
- LinkedIn
- Twitter/X
- WhatsApp
- Slack
- Discord
- And many other platforms

It's **not** your logo - it's a **preview card** that represents your website when shared.

## Example

When someone shares `https://exotu-website.vercel.app` on Facebook or LinkedIn, instead of showing a generic preview, it will show:
- A large image (your OG image)
- Your site title
- A description
- Your site name

This makes your link look professional and encourages clicks!

## What Should the Image Contain?

Your Open Graph image should include:

1. **Your Logo/Branding** - EXOTU logo prominently displayed
2. **Site Name** - "EXOTU" or "EXOTU - Exoskeleton Technology at University"
3. **Tagline** (optional) - Something like "Redefining Human Capability" or "Building the Future of Human Augmentation"
4. **Visual Appeal** - Use your brand colors (blue/cyan theme)
5. **Clean Design** - Make it readable and professional

### Design Tips

- **Keep text large and readable** - People will see this as a small thumbnail
- **Use high contrast** - Ensure text is readable on the background
- **Match your brand** - Use your website's color scheme
- **Keep it simple** - Don't overcrowd with too much information

## Image Specifications

### Required Dimensions
- **Recommended**: 1200 x 630 pixels
- **Minimum**: 600 x 315 pixels
- **Aspect Ratio**: 1.91:1 (width:height)
- **File Format**: JPG or PNG
- **File Size**: Under 8MB (smaller is better for faster loading)

### Why These Dimensions?

- Facebook/LinkedIn use 1200x630px
- Twitter uses similar dimensions
- This size works well across all platforms

## Where to Place the Image

1. **Create your image** (see examples below)
2. **Save it as**: `og-image.jpg` or `og-image.png`
3. **Place it in**: `public/images/og-image.jpg`

The path in the code is already set to `/images/og-image.jpg`, which maps to `public/images/og-image.jpg`.

## How to Create the Image

### Option 1: Design Tools (Recommended)

Use design tools like:
- **Canva** (free, easy to use)
  - Search for "Facebook Post" or "Social Media" templates
  - Use 1200x630px dimensions
  - Add your logo, text, and brand colors
- **Figma** (free, professional)
- **Adobe Photoshop/Illustrator**
- **GIMP** (free, open-source)

### Option 2: Online Generators

Search for "Open Graph image generator" online - there are free tools that can help.

### Option 3: Use Your Existing Assets

If you have:
- Your EXOTU logo
- Brand colors
- A design tool

You can create a simple card with:
- Logo centered or on the left
- Site name and tagline
- Background in your brand colors

## Example Design Ideas

### Simple Design
```
┌─────────────────────────────────────┐
│  [EXOTU Logo]                       │
│                                      │
│  EXOTU                               │
│  Exoskeleton Technology at          │
│  University                          │
│                                      │
│  Redefining Human Capability         │
└─────────────────────────────────────┘
```

### With Background
- Dark background (matching your site)
- EXOTU logo in blue/cyan
- White/light text
- Subtle gradient or pattern

## Current Configuration

The Open Graph image is configured in:
- **File**: `index.html` (line 23)
- **Path**: `%VITE_SITE_URL%/images/og-image.jpg`
- **Location**: `public/images/og-image.jpg`

## Testing Your Image

After creating and placing your image:

1. **Test on Facebook**:
   - Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Enter your URL
   - Click "Scrape Again" to see the preview

2. **Test on Twitter**:
   - Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Enter your URL to preview

3. **Test on LinkedIn**:
   - Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Troubleshooting

### Image Not Showing?

1. **Check file exists**: Verify `public/images/og-image.jpg` exists
2. **Check file name**: Must match exactly (case-sensitive)
3. **Clear cache**: Social media platforms cache images - use their debuggers to refresh
4. **Check URL**: Ensure the URL in meta tags is correct
5. **Rebuild**: Run `npm run build` after adding the image

### Image Looks Wrong?

- **Too small**: Use at least 1200x630px
- **Text too small**: Increase font size
- **Wrong aspect ratio**: Stick to 1.91:1 ratio
- **File too large**: Compress the image (aim for under 1MB)

## Quick Start Template

If you want a quick template, here's what to include:

```
Background: Dark (black or dark gray)
Logo: EXOTU logo (centered or top-left)
Title: "EXOTU" (large, white or blue)
Subtitle: "Exoskeleton Technology at University" (smaller, gray)
Tagline: "Redefining Human Capability" (medium, blue/cyan)
```

## Next Steps

1. Create your Open Graph image (1200x630px)
2. Save it as `public/images/og-image.jpg`
3. Test it using the tools above
4. Deploy and share a link to see it in action!

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Canva](https://www.canva.com/) - Free design tool
- [Figma](https://www.figma.com/) - Free design tool

