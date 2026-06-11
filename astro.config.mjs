// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Configuration Astro du site Yanexpro.
 *
 * `site` est l'URL canonique de production. Elle est utilisée pour :
 *   - générer le sitemap.xml (référencement Google/Bing) ;
 *   - construire les URL canoniques et Open Graph de chaque page.
 *
 * Si le domaine change un jour, c'est la SEULE ligne à modifier ici.
 */
export default defineConfig({
  site: 'https://yanexpro.com',
  integrations: [sitemap()],

  /**
   * Redirections depuis les adresses de l'ANCIEN site (WordPress) vers les
   * nouvelles pages, pour ne perdre ni visiteurs ni référencement acquis.
   */
  redirects: {
    '/location-r': '/remorques/',
    '/location-r/': '/remorques/',
  },
  // Sortie 100 % statique : aucun serveur requis, hébergeable n'importe où
  // (GitHub Pages, Netlify, Cloudflare Pages, hébergeur traditionnel…).
  output: 'static',
});
