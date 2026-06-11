# Site web Yanexpro Mécanique Auto

Site officiel de **Yanexpro Mécanique Auto** — garage certifié Bumper to
Bumper à Varennes (QC) — refonte complète, moderne, rapide et optimisée pour
le référencement (Google **et** assistants IA).

🌐 Production : [https://yanexpro.com](https://yanexpro.com)

---

## Sommaire

1. [Aperçu technique](#aperçu-technique)
2. [Modifier le contenu (cas courants)](#modifier-le-contenu-cas-courants)
3. [Travailler sur le site en local](#travailler-sur-le-site-en-local)
4. [Structure du projet](#structure-du-projet)
5. [SEO et découvrabilité par les IA](#seo-et-découvrabilité-par-les-ia)
6. [Déploiement](#déploiement)
7. [Points à vérifier / compléter](#points-à-vérifier--compléter)

---

## Aperçu technique

| | |
|---|---|
| Générateur | [Astro](https://astro.build) (site 100 % statique) |
| Langage | HTML/CSS + TypeScript pour les données |
| JavaScript livré | ~10 lignes (menu mobile) — le reste est du HTML pur |
| Hébergement | N'importe quel hébergeur statique (GitHub Pages, Netlify, Cloudflare Pages, FTP traditionnel…) |
| Dépendances | 3 seulement : `astro`, `@astrojs/sitemap`, police Inter |

**Pourquoi statique?** Aucun serveur ni base de données à entretenir, aucune
mise à jour de sécurité WordPress, chargement quasi instantané (excellent
pour Google) et hébergement gratuit possible.

---

## Modifier le contenu (cas courants)

> **Règle d'or : 95 % des mises à jour se font dans UN SEUL fichier :**
> [`src/data/business.ts`](src/data/business.ts)

| Je veux changer… | Fichier à modifier |
|---|---|
| Téléphone, courriel, adresse | `src/data/business.ts` → `business` |
| Heures d'ouverture | `src/data/business.ts` → `business.hours` (mettre à jour `display` **et** `schema`) |
| Ajouter / retirer un service | `src/data/business.ts` → tableau `services` |
| Catégories de remorques | `src/data/business.ts` → tableau `trailerCategories` |
| Avantages (courtoisie, Wi-Fi…) | `src/data/business.ts` → tableau `amenities` |
| Textes d'une page précise | `src/pages/<page>.astro` (le texte est en HTML lisible) |
| Couleurs, polices, espacements | `src/styles/global.css` (variables en haut du fichier) |
| Menu de navigation | `src/components/Header.astro` → tableau `navItems` |
| Résumé pour les IA | `public/llms.txt` (à garder synchronisé avec `business.ts`) |

Après toute modification : `npm run build` (ou poussez sur GitHub si le
déploiement automatique est configuré — voir [Déploiement](#déploiement)).

---

## Travailler sur le site en local

Prérequis : [Node.js](https://nodejs.org) 18.17 ou plus récent.

```bash
npm install        # 1. installer les dépendances (une seule fois)
npm run dev        # 2. serveur de développement → http://localhost:4321
                   #    (rechargement automatique à chaque sauvegarde)
npm run build      # 3. générer le site final dans dist/
npm run preview    # 4. prévisualiser dist/ tel qu'il sera en production
```

---

## Structure du projet

```
├── astro.config.mjs        ← URL du site, sitemap, redirections anciennes URL
├── public/                 ← fichiers copiés tels quels à la racine du site
│   ├── favicon.svg         ← icône d'onglet (clé à molette rouge)
│   ├── robots.txt          ← directives moteurs de recherche + lien sitemap
│   └── llms.txt            ← fiche de l'entreprise pour les assistants IA
└── src/
    ├── data/
    │   └── business.ts     ← ⭐ TOUTES les infos d'affaires (source unique)
    ├── styles/
    │   └── global.css      ← thème : couleurs, typo, boutons, cartes
    ├── layouts/
    │   └── Layout.astro    ← gabarit commun : <head> SEO, JSON-LD, header/footer
    ├── components/
    │   ├── Header.astro    ← en-tête collant + menu mobile
    │   ├── Footer.astro    ← pied de page (coordonnées, heures, navigation)
    │   ├── Icon.astro      ← jeu d'icônes SVG en ligne
    │   ├── PageHero.astro  ← en-tête des pages intérieures (H1)
    │   └── CtaBand.astro   ← bandeau « Appelez-nous » réutilisable
    └── pages/              ← une page = un fichier = une URL
        ├── index.astro     ← /            (accueil)
        ├── services.astro  ← /services/
        ├── garage.astro    ← /garage/
        ├── remorques.astro ← /remorques/
        ├── contact.astro   ← /contact/
        └── 404.astro       ← page « introuvable »
```

---

## SEO et découvrabilité par les IA

Le site applique les meilleures pratiques actuelles, **sans plugin ni
service payant** :

### Moteurs de recherche classiques (Google, Bing)

- **Données structurées schema.org** (`AutoRepair`/LocalBusiness) injectées
  sur chaque page par `src/layouts/Layout.astro` : nom, adresse, téléphone,
  heures, services et zone desservie — c'est ce qui alimente la fiche
  enrichie de Google.
- **Balises uniques par page** : `<title>`, `meta description`, URL
  canonique, Open Graph (aperçus Facebook/LinkedIn) et Twitter Cards.
- **`sitemap-index.xml` généré automatiquement** à chaque build et déclaré
  dans `robots.txt`.
- **Redirections 301 des anciennes URL** (`/location-r/` → `/remorques/`)
  pour conserver le référencement acquis.
- **HTML sémantique** : un seul `<h1>` par page, hiérarchie de titres
  stricte, attributs `aria`, contraste AA.
- **Performance maximale** : pages statiques sans JavaScript superflu —
  facteur de classement direct (Core Web Vitals).

### Assistants IA (Claude, ChatGPT, Perplexity, Gemini…)

- **`public/llms.txt`** : fiche descriptive de l'entreprise au format
  [llms.txt](https://llmstxt.org/), le standard émergent que lisent les
  robots d'IA. Elle leur donne les faits exacts (adresse, heures, services)
  à citer quand un internaute demande « un bon garage à Varennes ».
- **`robots.txt` ouvert** : les robots d'indexation IA (GPTBot,
  ClaudeBot, PerplexityBot…) ne sont pas bloqués — c'est volontaire.
- Les **données structurées JSON-LD** servent aussi aux moteurs de réponse
  IA, qui s'en servent pour extraire des faits fiables.

### Après la mise en ligne (à faire une fois)

1. Déclarer le site dans [Google Search Console](https://search.google.com/search-console)
   et soumettre `https://yanexpro.com/sitemap-index.xml`.
2. Vérifier/mettre à jour la fiche [Google Business Profile](https://business.google.com)
   (mêmes nom, adresse, téléphone et heures que le site — la cohérence
   NAP est un facteur clé du référencement local).
3. Tester les données structurées : [Rich Results Test](https://search.google.com/test/rich-results).

---

## Déploiement

Le dépôt inclut un workflow GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) qui
construit le site à chaque poussée sur `main` et le publie sur
**GitHub Pages**.

Activation (une seule fois) : dans GitHub → *Settings* → *Pages* →
*Source* : **GitHub Actions**. Pour le domaine yanexpro.com, ajouter le
domaine personnalisé dans la même page et pointer le DNS chez le registraire
(enregistrement `CNAME` vers `<utilisateur>.github.io`).

**Autres hébergeurs** : le site généré est le dossier `dist/` après
`npm run build` — il peut être téléversé tel quel chez n'importe quel
hébergeur (Netlify et Cloudflare Pages détectent Astro automatiquement).

> ⚠️ Si le site est servi ailleurs que sur `https://yanexpro.com`,
> mettre à jour `site` dans `astro.config.mjs` (une ligne) pour que le
> sitemap et les URL canoniques restent exacts.

---

## Points à vérifier / compléter

Contenu repris de l'ancien site et des fiches publiques de l'entreprise —
quelques éléments méritent une validation par le propriétaire :

- [ ] **Heures d'ouverture** : l'ancien site indiquait « vendredi 8 h à 12 h
      hors saison des pneus » — confirmer et ajuster `business.hours`.
- [ ] **Numéro civique** : 772 (utilisé ici) — certaines fiches indiquent 774.
- [ ] **Catégories de remorques** (`trailerCategories`) : descriptions
      génériques à ajuster selon la flotte réelle (dimensions, tarifs…).
- [ ] **Photos réelles** du garage et de l'équipe : déposer les images dans
      `public/` (ou `src/assets/` pour optimisation automatique) et les
      intégrer aux pages — un vrai plus pour la conversion.
- [ ] **Image de partage** (`og:image`) : ajouter une photo 1200 × 630 px
      dans `public/` et la déclarer dans `src/layouts/Layout.astro` pour de
      plus beaux aperçus sur les réseaux sociaux.
- [ ] **Réseaux sociaux** : si l'entreprise a une page Facebook, l'ajouter à
      `business.socials` (elle apparaîtra aussi dans les données SEO).
