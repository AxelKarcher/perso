import emg from 'assets/projects/emg.png'
import cinqdegres from 'assets/projects/5degres.png'
import omnegy from 'assets/projects/omnegy.png'
import ysocorp from 'assets/projects/ysocorp.png'
import epitech from 'assets/projects/epitech.png'
import safescar from 'assets/projects/safescar.png'

export default [
  {
    title: 'Euro Media Group',
    role: 'Développement Front-end',
    duration: '6 mois',
    type: 'Stage',
    icons: [emg],
    context: "EMG est une entreprise pilier dans la réalisation d'événements sportifs pour la TV broadcast \
      (Football, Rugby, Basketball...) depuis plus de 30 ans. J'avais rejoint la cellule R&D où avait commencé \
      la migration de l'interface de “pilotage synthés” pour opérateurs. L'application web communique avec \
      un programme Unity qui affiche des éléments graphiques par-dessus le flux d'une caméra en direct.",
    achievements: [
      "Amélioration de l'ergonomie de l'interface",
      "Propositions et ajout de nouvelles fonctionnalités",
      "Participation aux sessions de testing avec des opérateurs, recueil et réflexion de leurs remarques",
      "Proposition et implémentation d'une page dédiée à l'exploitation de l'API du site Twitch",
      "Créations de composants UI",
      "Force de proposition UX et features",
      "Proposition et mise en place d'une page dédiée aux tests manuels de tous les synthés à la suite",
      "Identification du besoin et développement d'un module de gestion des alertes pour les opérateurs",
      "Consultation et complétion de la documentation des composants UI de l'équipe",
      "Daily meeting tous les matins"
    ],
    technologies: ['Node', 'Vue JS', 'Electron', 'Sequelize', 'SQL'],
    tools: ['Discord']
  },
  {
    title: '5DEGRES / Omnegy',
    role: 'Développement Front-end',
    duration: '4 mois',
    type: 'Stage',
    icons: [cinqdegres, omnegy],
    context: "5DEGRES est une régie de développeurs. J'ai été envoyé en mission à Omnegy avec mon maître de \
      stage pour 4 mois. Omnegy est une entreprise spécialisée dans le trading d'énergies et l'aide à la \
      visualisation de la consommation pour d'autres entreprises. Une maquette du dashboard à \
      développer avait été préalablement conçue par des designers, et le Back-end était réalisé \
      simultanément au Front-end par une équipe sur place. Transformer une maquette en code \
      fonctionnel et dialoguer avec les équipes sur place a constitué une excellente expérience.",
    achievements: [
      "Test Driven Development",
      "Transformation d'une maquette en code fonctionnel",
      "Dialogue quotidien avec l'équipe Back-end (sur place)",
      "Questionnements pertinents sur l'interface",
      "Création du projet from-scratch (composants, pages, méthodes customisées)",
      "Daily meetings, méthodologie Scrum",
      "Routing",
      "Création d'un composant tableau from-scratch, pensé pour plusieurs utilisations à plusieurs \
        endroits différents de l'application",
      "Création d'un jeu de composants en adéquation avec la maquette (couleurs, écarts, arrondis \
        et tailles tirées d'Adobe XD)",
      "Développement de modules UI de graphiques, d'affichage de valeurs, modales...",
      "Complétion et rédaction de tâches, bug et “user journeys” sur Jira",
      "Consultation et discussion de la pertinence de tel ou tel façon de recevoir et/formater la data \
        avec l'équipe Back-end",
    ],
    technologies: ['React TS', 'Jest', 'SCSS', 'Recharts', 'Redux Toolkit'],
    tools: ['Jira', 'Adobe XD', 'GitLab', 'Swagger']
  },
  {
    title: 'YSO Corp',
    role: 'Développement Full-stack',
    duration: '6 mois',
    type: 'Stage en alternance',
    icons: [ysocorp],
    context: "YSO Corp est une entreprise spécialisée dans la création, édition et publication de jeux mobiles \
      “hyper-casu” (simples et accessibles, souvent destinés à un public occasionnel ou débutant). Une \
      équipe “engine” récupère les informations d'un projet Unity et traduit les scripts de C# en JavaScript. \
      J'étais chargé d'implémenter ces fonctionnalités sur une page Web pour faciliter la modification des \
      “playables” (versions web de jeux Unity destinées à servir de publicités interactives et efficaces).",
    achievements: [
      "Ticketing et documentation de plusieurs pans du projet",
      "Dialogue quotidien avec l'équipe “engine”",
      "Implémentation des fonctionnalités sur le site",
      "Factorisation et architecture du code",
      "Mise en place de méthodes pour gérer le flux de la data au sein de l'application",
      "Rigueur apportée au style de certains éléments de l'interface",
      "Développement de calls Back-end pour questionner la base de données et services Amazon",
      "Amélioration d'un tableau en permettant l'ajout de “breakpoints” (filtrage complété par \
        l'utilisateur)",
      "Attentif aux détails de fonctionnement et de style sur l'ensemble du site, documentation des \
        bugs trouvés sur la page Notion correspondante",
    ],
    technologies: ['React TS', 'C#', 'SCSS', 'Node', 'Prisma'],
    tools: ['Unity', 'BitBucket', 'Slack', 'GitKraken', 'Notion', 'DBeaver']
  },
  {
    title: 'EPITECH / SafeScar',
    role: 'Lead Front-end',
    duration: '2 ans',
    type: "Projet de fin d'études",
    icons: [epitech, safescar],
    context: "SafeScar est une application centralisant les outils des tatoueurs et de leurs futurs clients. \
      L'équipe se composait de 3 développeurs Front-end, 2 Back-end et un IA & site vitrine. Fort de mon \
      expérience avec les technologies React, ma rigueur et mon désir de suivre de près chaque pan du \
      projet, j'ai porté la casquette de “Product owner” en plus de celle de “lead Front-end”.",
    achievements: [
      "Développement from-scratch d'une application mobile",
      "Routing de l'application (structure des sous-pages, utilisation d'une map à composants)",
      "Développement des composants et bases de pages à utiliser dans tout le reste de l'application",
      "Attention accrue portée à l'ergonomie et la fonctionnalité de chaque élément",
      "Dialogue régulier avec l'équipe Back-end, force de proposition, questionner et challenger \
        pour s'assurer de la logique de gestion de la data",
      "Participation au maquettage des écrans",
      "Création des écrans: création de projets (client), messagerie (liste et conversation précise), \
        création de formulaire (inspiré de Google Forms, pour tatoueurs)...",
      "Refonte des pages de la page paramètres",
      "Mise en place de méthodes customisées pour appeler l'API de façon simple, maintenable et \
        factorisée (rédaction d'une brève documentation pour l'équipe Front-end)",
    ],
    technologies: ['React-Native', 'Expo'],
    tools: ['Swagger', 'Trello', 'Discord', 'Microsoft Teams', 'Suite Google']
  },
  {
    title: 'Sort Me',
    role: 'Développement Full-stack',
    duration: '1 semaine',
    type: "Projet perso",
    context: "Amateur de musique, j'ai une playlist Spotify “À trier” qui compte plus de 1300 titres. En discutant \
      avec d'autres passionnés, je constate qu'il manque certaines fonctionnalités à Spotify pour un tri \
      rapide et exhaustif.",
    achievements: [
      "Identification et réflexion apportée à la résolution d'un besoin spécifique",
      "Exploitation de l'API de Spotify",
      "Affichage et ajout de playlists",
      "Composant lecteur audio par défaut retravaillé pour correspondre à la charte de l'interface",
      "Pagination de la data",
      "Identification à Spotify avec OAuth2",
      "Consultation de la documentation de Spotify, enregistrement et configuration de l'application pour utilisation",
      "Historique des actions, possibilité de les annuler",
      "Mobile first",
    ],
    technologies: ['React JS', 'SCSS', 'Vite'],
    tools: ['API Spotify', 'Firebase hosting', 'Google Domains', 'GitHub Actions']
  },
  {
    title: 'Plants VS Zombies',
    role: 'Game developpement',
    duration: '2 semaines',
    type: "Projet perso",
    context: "PVZ est un jeu de mon enfance. Avec un ami, nous avons décidé de reprogrammer le jeu entièrement \
      en JavaScript “pur” afin de pouvoir ajouter une dimension \"coopération à distance\", \
      choisir la taille du terrain et ajouter des plantes et zombies customisés.",
    achievements: [
      "Travail en duo, collaboration en full remote",
      "Architecture des entités et héritage des classes composant le jeu vidéo",
      "Implémentation des zombies et plantes",
      "Répartition du travail en fonction des compétences initiales",
      "Entre-aide et montée en compétence mutuelle",
      "Suivi de l'avancement de l'implémentation des éléments de gameplay",
      "Utilisation des WebSockets pour une coopération en simultanée"
    ],
    technologies: ['JavaScript', 'WebSockets'],
    tools: ['Discord', 'Diagrams.net']
  }
]