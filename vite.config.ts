import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin to replace __VITE_SITE_URL__ in HTML with default if not set
    {
      name: 'html-env-replace',
      transformIndexHtml(html) {
        const siteUrl = process.env.VITE_SITE_URL || 'https://exotu-website.vercel.app';
        return html.replace(/__VITE_SITE_URL__/g, siteUrl);
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
