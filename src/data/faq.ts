/**
 * ============================================================================
 * FOIRE AUX QUESTIONS
 * ============================================================================
 * Les questions/réponses de la page /faq/. Chaque entrée alimente aussi les
 * données structurées « FAQPage » de schema.org : les moteurs de recherche
 * et les assistants IA (Claude, ChatGPT…) peuvent citer ces réponses
 * directement — gardez-les exactes et à jour.
 *
 * Pour ajouter une question : ajoutez une entrée au tableau. La réponse
 * accepte du HTML simple (liens <a>, gras <strong>).
 * ============================================================================
 */

export interface Faq {
  question: string;
  /** Réponse en HTML simple (affichée sur la page ET envoyée aux moteurs). */
  answer: string;
}

export const faqs: Faq[] = [
  {
    question:
      'Ma garantie de constructeur reste-t-elle valide si je fais entretenir mon véhicule chez vous plutôt que chez le concessionnaire?',
    answer:
      'Oui. La loi vous permet de faire entretenir votre véhicule neuf dans l’atelier de votre choix sans perdre la garantie du fabricant, à condition de respecter le calendrier d’entretien prévu au carnet du constructeur. C’est exactement notre façon de travailler : chaque intervention suit les normes et directives du fabricant, et nous vous remettons des factures détaillées qui servent de preuves d’entretien.',
  },
  {
    question: 'Quand dois-je poser mes pneus d’hiver au Québec?',
    answer:
      'Au Québec, les pneus d’hiver sont obligatoires du <strong>1ᵉʳ décembre au 15 mars</strong>. Nous recommandons toutefois de les poser dès que la température se maintient sous 7 °C — la gomme des pneus d’été perd alors son adhérence. Réservez tôt : les semaines précédant le 1ᵉʳ décembre sont les plus occupées de l’année. Nous offrons aussi l’entreposage saisonnier de vos pneus.',
  },
  {
    question: 'Offrez-vous des voitures de courtoisie?',
    answer:
      'Oui. Des voitures de courtoisie sont disponibles pour vous garder mobile pendant que nous travaillons sur votre véhicule. Si vous préférez attendre sur place, notre salle d’attente est équipée du Wi-Fi gratuit, de café et de postes de travail. Mentionnez votre besoin au moment de prendre rendez-vous.',
  },
  {
    question: 'Dois-je prendre rendez-vous ou puis-je passer sans préavis?',
    answer:
      'Le rendez-vous est recommandé pour garantir une prise en charge rapide : appelez-nous au 450 652-2121 ou utilisez la page <a href="/rendez-vous/">Rendez-vous</a>. Selon la disponibilité des baies, nous pouvons parfois accommoder les visites sans préavis — appelez avant de passer pour éviter l’attente.',
  },
  {
    question: 'Faites-vous l’inspection d’un véhicule d’occasion avant achat?',
    answer:
      'Oui, c’est l’un de nos services les plus appréciés. Avant d’acheter un véhicule d’occasion, nos techniciens l’inspectent de fond en comble — mécanique, freins, suspension, codes électroniques, traces d’accident ou de corrosion — et vous remettent un portrait clair de son état. De quoi négocier (ou renoncer) en toute connaissance de cause.',
  },
  {
    question: 'Quels types de remorques louez-vous?',
    answer:
      'Nous offrons une gamme complète de remorques en location directement au garage : remorques utilitaires ouvertes, remorques fermées et plateformes pour le transport de véhicules. Les tarifs et la disponibilité se confirment par téléphone au 450 652-2121 — voir la page <a href="/remorques/">Location de remorques</a> pour les détails.',
  },
  {
    question: 'Travaillez-vous sur les camions légers et véhicules commerciaux?',
    answer:
      'Oui. En plus des automobiles, nous nous spécialisons dans l’entretien et la réparation de camions légers, y compris les véhicules de flotte commerciale. Notre garage est situé dans le parc industriel de Varennes, à proximité de la route 132 — pratique pour les entreprises du secteur.',
  },
];
