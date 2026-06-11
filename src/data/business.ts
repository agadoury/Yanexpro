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

  /**
   * Villes desservies — affichées dans le pied de page et transmises aux
   * moteurs de recherche (référencement local « près de chez moi »).
   */
  areaServed: [
    'Varennes',
    'Boucherville',
    'Sainte-Julie',
    'Verchères',
    'Saint-Amable',
    'Contrecœur',
  ],

  /** Réseaux sociaux — laissez le tableau vide si aucun. */
  socials: [] as { name: string; url: string }[],
};

/**
 * ============================================================================
 * BANDEAU D'ANNONCE SAISONNIER
 * ============================================================================
 * Bandeau affiché sous l'en-tête sur tout le site (ex. : saison des pneus).
 * Pour l'activer : `enabled: true`, ajustez le message, reconstruisez.
 * Le visiteur peut le fermer (mémorisé dans son navigateur) ; changer le
 * message le fait réapparaître pour tout le monde.
 * ============================================================================
 */
export const announcement = {
  enabled: false,
  message:
    'La saison des pneus approche : réservez votre pose de pneus d’hiver dès maintenant.',
  /** Bouton du bandeau — mettre `link: null` pour un message sans bouton. */
  link: { label: 'Réserver', href: '/rendez-vous/' } as {
    label: string;
    href: string;
  } | null,
};

/**
 * ============================================================================
 * MESURE D'AUDIENCE (Plausible Analytics)
 * ============================================================================
 * Statistiques de visites respectueuses de la vie privée (aucun témoin,
 * conforme à la Loi 25 — pas de bannière de consentement requise).
 *
 * Activation :
 *   1. Créez un compte sur https://plausible.io et ajoutez le site
 *      « yanexpro.com ».
 *   2. Passez `enabled` à `true` ci-dessous, reconstruisez.
 *   3. (Recommandé) Dans Plausible → Site settings → Goals, créez les
 *      objectifs « Appel téléphonique » et « Courriel » : le site envoie
 *      déjà ces événements à chaque clic sur un numéro ou un courriel.
 * ============================================================================
 */
export const analytics = {
  enabled: false,
  /** Domaine tel que déclaré dans Plausible. */
  domain: 'yanexpro.com',
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
 * RÉSERVATION EN LIGNE (Cal.com)
 * ============================================================================
 * Le site intègre la prise de rendez-vous en ligne via Cal.com (gratuit).
 * Marche à suivre complète : voir la section « Réservation en ligne » du
 * README.md.
 *
 * En bref :
 *   1. Créez le compte sur https://cal.com (langue : français,
 *      fuseau : America/Toronto).
 *   2. Créez un type d'événement par entrée du tableau `types` ci-dessous —
 *      le slug Cal.com doit correspondre EXACTEMENT au champ `slug`.
 *   3. Activez « Requiert une confirmation » sur chaque événement : le
 *      client demande une plage, le garage confirme (évite les doubles
 *      réservations d'ascenseurs/baies).
 *   4. Inscrivez votre nom d'utilisateur Cal.com dans `calUsername`,
 *      passez `enabled` à `true`, reconstruisez le site.
 *
 * Tant que `enabled` vaut `false`, le site reste exactement comme avant
 * (appels téléphoniques d'abord) et la page /rendez-vous/ affiche un
 * message « bientôt disponible ».
 * ============================================================================
 */
export const booking = {
  /** Passer à `true` une fois le compte Cal.com configuré. */
  enabled: false,

  /** Nom d'utilisateur Cal.com du garage (⚠ placeholder à remplacer). */
  calUsername: 'yanexpro',

  /**
   * Types de rendez-vous proposés sur la page /rendez-vous/.
   * `slug` = slug de l'événement dans Cal.com (doit correspondre exactement).
   * `icon` = clé du composant src/components/Icon.astro.
   */
  types: [
    {
      slug: 'entretien',
      title: 'Entretien périodique',
      description:
        'Vidange d’huile, filtres, inspection saisonnière et entretien selon le carnet du constructeur.',
      icon: 'wrench',
    },
    {
      slug: 'pneus',
      title: 'Pneus et alignement',
      description:
        'Pose saisonnière, vente, entreposage et alignement. Réservez tôt en saison des pneus!',
      icon: 'tire',
    },
    {
      slug: 'diagnostic',
      title: 'Diagnostic et réparation',
      description:
        'Témoin allumé, bruit suspect, perte de puissance : décrivez le problème, on s’en occupe.',
      icon: 'diagnostic',
    },
    {
      slug: 'inspection',
      title: 'Inspection pré-achat',
      description:
        'Inspection complète d’un véhicule d’occasion avant l’achat, avec rapport détaillé.',
      icon: 'clipboard',
    },
    {
      slug: 'remorque',
      title: 'Location de remorque',
      description:
        'Réservez votre remorque : indiquez le type souhaité et les dates de location.',
      icon: 'trailer',
    },
  ],
};

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
