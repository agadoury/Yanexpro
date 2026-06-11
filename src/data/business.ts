/**
 * ============================================================================
 * FICHE D'ENTREPRISE — SOURCE UNIQUE DE VÉRITÉ
 * ============================================================================
 *
 * TOUTES les informations d'affaires du site (téléphone, adresse, heures,
 * services…) vivent dans ce fichier. Pour mettre à jour le site :
 *
 *   1. Modifiez la valeur ici (et seulement ici).
 *   2. Reconstruisez le site (`npm run build`) ou poussez sur GitHub.
 *
 * Chaque page, le pied de page, l'en-tête ET les données structurées SEO
 * (schema.org) lisent ce fichier. Aucune information n'est dupliquée dans
 * les pages elles-mêmes.
 * ============================================================================
 */

export const business = {
  /** Nom commercial affiché partout sur le site. */
  name: 'Yanexpro Mécanique Auto',

  /** Nom court (en-tête, pied de page). */
  shortName: 'Yanexpro',

  /** Slogan affiché dans l'en-tête de la page d'accueil. */
  tagline: 'Mécanique auto de confiance à Varennes',

  /** Propriétaire (page « Notre garage »). */
  owner: 'Yannick McGinnis',

  /** Téléphone — format affiché et format machine (liens tel:). */
  phone: {
    display: '450 652-2121',
    e164: '+14506522121',
  },

  email: 'yanexpro@hotmail.com',

  address: {
    street: '772, boulevard Lionel-Boulet',
    city: 'Varennes',
    province: 'QC',
    postalCode: 'J3X 1P7',
    country: 'CA',
    /** Repère pratique mentionné dans les textes. */
    landmark: 'Parc industriel de Varennes, à proximité de la route 132',
  },

  /** Lien Google Maps (bouton « Itinéraire »). */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Yanexpro+M%C3%A9canique+Auto+772+boulevard+Lionel-Boulet+Varennes+QC',

  /**
   * Heures d'ouverture.
   * `schema` suit le format schema.org (https://schema.org/openingHours) et
   * alimente Google directement — gardez les deux versions synchronisées.
   *
   * NOTE : le vendredi, le garage ferme à midi hors saison des pneus.
   */
  hours: {
    display: [
      { days: 'Lundi – Jeudi', hours: '8 h à 17 h' },
      { days: 'Vendredi', hours: '8 h à 12 h (hors saison des pneus)' },
      { days: 'Samedi – Dimanche', hours: 'Fermé' },
    ],
    schema: ['Mo-Th 08:00-17:00', 'Fr 08:00-12:00'],
  },

  /** Certifications et affiliations (gages de confiance). */
  certifications: [
    {
      name: 'Bumper to Bumper',
      description:
        'Garage certifié Bumper to Bumper : pièces de qualité et garantie reconnue partout au Canada.',
    },
  ],

  /** Avantages clients mis de l'avant sur l'accueil et « Notre garage ». */
  amenities: [
    {
      title: 'Voitures de courtoisie',
      description:
        'Restez mobile pendant que nous travaillons sur votre véhicule.',
      icon: 'car',
    },
    {
      title: 'Salle d’attente équipée',
      description:
        'Wi-Fi gratuit, café et postes de travail pour patienter — ou télétravailler — confortablement.',
      icon: 'coffee',
    },
    {
      title: 'Normes des constructeurs',
      description:
        'Entretien conforme aux directives des fabricants : votre garantie demeure pleinement valide.',
      icon: 'shield',
    },
    {
      title: 'Rendez-vous rapides',
      description:
        'Appelez-nous : nous trouvons une plage qui respecte votre horaire.',
      icon: 'clock',
    },
  ],

  /** Réseaux sociaux — laissez le tableau vide si aucun. */
  socials: [] as { name: string; url: string }[],
};

/**
 * ============================================================================
 * SERVICES OFFERTS
 * ============================================================================
 * Pour ajouter / retirer un service : modifiez ce tableau. La page Services,
 * l'aperçu de l'accueil et les données SEO se mettent à jour automatiquement.
 *
 * `icon` doit correspondre à une clé du composant `src/components/Icon.astro`.
 * `featured: true` = le service apparaît aussi sur la page d'accueil (6 max).
 * ============================================================================
 */
export interface Service {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    title: 'Entretien préventif',
    description:
      'Vidanges d’huile, filtres, mises au point et entretien périodique selon les normes et directives de votre constructeur — votre garantie reste valide.',
    icon: 'wrench',
    featured: true,
  },
  {
    title: 'Freins et ABS',
    description:
      'Inspection, remplacement de plaquettes, disques et étriers, entretien des systèmes de freinage antiblocage (ABS).',
    icon: 'brake',
    featured: true,
  },
  {
    title: 'Diagnostic électronique',
    description:
      'Lecture de codes, analyse des témoins lumineux et diagnostic précis avec des équipements à la fine pointe de la technologie.',
    icon: 'diagnostic',
    featured: true,
  },
  {
    title: 'Suspension et direction',
    description:
      'Amortisseurs, jambes de force, rotules, crémaillères : tenue de route sûre et confortable, été comme hiver.',
    icon: 'suspension',
    featured: true,
  },
  {
    title: 'Pneus et alignement',
    description:
      'Vente, installation, entreposage saisonnier et alignement de précision pour maximiser la durée de vie de vos pneus.',
    icon: 'tire',
    featured: true,
  },
  {
    title: 'Climatisation et refroidissement',
    description:
      'Recharge et réparation de climatisation, radiateurs, thermostats et systèmes de refroidissement du moteur.',
    icon: 'snowflake',
    featured: true,
  },
  {
    title: 'Système d’échappement',
    description:
      'Silencieux, catalyseurs et tuyauterie d’échappement : réparation et remplacement pour un véhicule conforme et silencieux.',
    icon: 'exhaust',
  },
  {
    title: 'Injection et électricité',
    description:
      'Systèmes d’injection, alternateurs, démarreurs, batteries et câblage : nous traquons les pannes électriques les plus tenaces.',
    icon: 'bolt',
  },
  {
    title: 'Inspection pré-achat',
    description:
      'Avant d’acheter un véhicule d’occasion, faites-le inspecter de fond en comble par nos techniciens. Achetez en toute confiance.',
    icon: 'clipboard',
  },
  {
    title: 'Camions légers',
    description:
      'Entretien et réparation de camions légers et véhicules de flotte commerciale : gardez vos outils de travail sur la route.',
    icon: 'truck',
  },
  {
    title: 'Accessoires et performance',
    description:
      'Vente et installation d’accessoires audio et de performance pour personnaliser votre véhicule.',
    icon: 'speaker',
  },
  {
    title: 'Location de remorques',
    description:
      'Gamme complète de remorques en location pour vos déménagements, travaux et projets. Réservez par téléphone.',
    icon: 'trailer',
  },
];

/**
 * ============================================================================
 * LOCATION DE REMORQUES
 * ============================================================================
 * Catégories affichées sur la page « Location de remorques ».
 * Ajustez les descriptions selon la flotte réelle ; pour les tarifs et la
 * disponibilité, le site invite toujours à téléphoner.
 * ============================================================================
 */
export const trailerCategories = [
  {
    title: 'Remorques utilitaires',
    description:
      'Idéales pour le transport de matériaux, de meubles ou d’équipement de jardinage. Plusieurs dimensions offertes.',
    icon: 'trailer',
  },
  {
    title: 'Remorques fermées',
    description:
      'Protégez votre chargement des intempéries et des regards : parfaites pour les déménagements et le transport sécurisé.',
    icon: 'box',
  },
  {
    title: 'Transport de véhicules',
    description:
      'Remorques plateformes pour déplacer voitures, VTT, motoneiges et autres véhicules récréatifs.',
    icon: 'car',
  },
];
