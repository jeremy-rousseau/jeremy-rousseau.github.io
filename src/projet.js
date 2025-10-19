const projet = {
  display: true,
  projectsList: [
    {
      title: "Développement de l’application CyberMobilité",
      categories: ["Formation"],
      images: [
        { src: "https://i.postimg.cc/zv2btvtK/cybermobilite.png", legend: "Interface de l'application CyberMobilité" }
      ],
      year: "2023",
      company: "Université Grenoble Alpes",
      description: "Projet d'intégration (dans le cadre de l’étude InterMob)",
      details: [
        "Équipe projet de 5 personnes",
        "Gestion de projet",
        "Modélisation et création d'une base de données spatiales",
        "Mise en place de la maquette de l'application",
        "Développement Front-End",
        "Développement Back-End"
      ],
      keywords: ["StarUML", "GanttProject", "Github", "Figma", "JavaScript", "Vue.js", "HTML5", "Bootstrap", "Leaflet", "Spring", "Java", "JDBC", "PostgreSQL", "PostGIS"],
      media: [
        { type: "demo", title: "Démo de l'application CyberMobilité", url: "https://www.youtube.com/watch?v=nq4YGjez7x0" },
        { type: "video", title: "Présentation de l'étude InterMob", url: "https://www.youtube.com/watch?v=fWFAP-8U0VE" },
      ]
    },
    {
      title: "Contribution au plugin QompliGIS d'Oslandia",
      categories: ["Formation"],
      images: [
        { src: "https://i.postimg.cc/h4sG1X65/qompligis.png", legend: "Interface du Plugin QompliGIS" }
      ],
      year: "2022",
      company: "Université Grenoble Alpes",
      description: "Projet de mise en pratique des compétences acquises durant la première année de master",
      details: [
        "Création de points de contrôle sur la structure des géométries et la topologie des couches via PyQGIS",
        "Utilisation de Github pour le versioning et la collaboration",
        "Travail en équipe"
      ],
      keywords: ["Python", "QGIS", "Github"],
      media: [
        { type: "", title: "Oslandia", url: "https://oslandia.com/" },
        { type: "github", title: "Répertoire du projet", url: "https://gitlab.com/Oslandia/qgis/qompligis" },
        { type: "article", title: "Nouvelle sortie du plugin QompliGIS (Collaboration avec l’Université Grenoble Alpes)", url: "https://oslandia.com/2022/07/26/nouvelle-sortie-du-plugin-qompligis/" }
      ]
    },
    {
      title: "Atlas des chiffres clés",
      categories: ["Professionnel"],
      images: [
        { src: "https://i.postimg.cc/hjjKCrHZ/Atlas-LSOA-1.jpg", legend: "Page de couverture" },
        { src: "https://i.postimg.cc/cLBK2Fbd/Atlas-LSOA-2.jpg", legend: "Les agents en chiffres" },
        { src: "https://i.postimg.cc/pXNpTNN2/Atlas-LSOA-3.jpg", legend: "Géographie" },
        { src: "https://i.postimg.cc/FHpRD7YR/Atlas-LSOA-4.jpg", legend: "Revenu" },
        { src: "https://i.postimg.cc/Dw9CpyH9/Atlas-LSOA-5.jpg", legend: "Artisanat" },
        { src: "https://i.postimg.cc/90SWv7GP/Atlas-LSOA-6.jpg", legend: "Capacité touristique" },
        { src: "https://i.postimg.cc/0ym96rsj/Atlas-LSOA-7.jpg", legend: "Profil des touristes" },
        { src: "https://i.postimg.cc/mDd4xHQX/Atlas-LSOA-8.jpg", legend: "Collecte des déchets" },
        { src: "https://i.postimg.cc/WtLfxNfY/Atlas-LSOA-9.jpg", legend: "Accessibilité" }

      ],
      year: "2020",
      company: "Les Sables d'Olonne Agglomération",
      description: "Mise à jour de l'Atlas des chiffres clés du territoire",
      details: [
        "Travail en autonomie (Télétravail)",
        "Récupération de données",
        "Tri et exploitation des données",
        "Restitution écrite des résultats",
        "Infographie"
      ],
      keywords: ["INSEE", "PowerPoint", "Excel"],
      media: [

      ]
    },
    {
      title: "Projet de Webmapping",
      categories: ["Formation"],
      images: [
        { src: "https://i.postimg.cc/Zq5ZwHNB/Projet-Webmapping-1.png", legend: "Accueil" },
        { src: "https://i.postimg.cc/7Y1kDdMJ/Projet-Webmapping-2.png", legend: "Graphique" },
        { src: "https://i.postimg.cc/0jpLkKm1/Projet-Webmapping-3.png", legend: "Carte avec OpenLayers" }
      ],
      year: "2023",
      company: "Institut d'Urbanisme et de Géographie Alpine",
      description: "Peut-on affirmer que l’artificialisation des sols dans les départements du Rhône et de l'Isère est 4 fois plus rapide que l’augmentation de leur population entre 2006 et 2012 ?",
      details: [
        "Analyse des données d'occupation des sols (CORINE Land Cover)",
        "Comparaison avec les données démographiques (INSEE)",
        "Création d'un site web interactif pour la visualisation des résultats avec carte, graphique et tableau"
      ],
      keywords: ["HTML", "CSS", "JavaScript", "OpenLayers", "Github"],
      media: [
        { type: "github", title: "Répertoire du projet", url: "https://github.com/jeremy-rousseau/Projet_Webmapping/tree/master" }
      ]
    },
    {
      title: "Projet de fin d'études STID",
      categories: ["Formation"],
      images: [
        { src: "https://i.postimg.cc/y8K8QWP5/Projet-STID.png", legend: "Interface d'un des programmes" }
      ],
      year: "2019",
      company: "IUT de Vannes",
      description: "Étude statistique : Typologie et profil des nouveaux patients admis aux urgences",
      details: [
        "Équipe projet de 7 personnes",
        "Tri, exploitation et automatisation",
        "Application de SIG",
        "Restitution écrite et orale des résultats",
        "Infographie"
      ],
      keywords: ["Excel", "VBA", "QGIS", " Word", "PowerPoint"],
      media: []
    },
    {
      title: "Infocentre Lycées",
      categories: ["Professionnel"],
      images: [
        { src: "https://i.postimg.cc/Ls6CVBZh/Infocentre-lycees.png", legend: "Interface principale" }
      ],
      year: "2021",
      company: "Région Auvergne-Rhône-Alpes",
      description: "Création d'une application de gestion et de suivi des lycées de la région",
      details: [
        "Analyse des besoins des utilisateurs",
        "Conception de l'architecture de l'application",
        "Développement de l'application"
      ],
      keywords: ["GEO Générateur", "HTML", "SQL"],
      media: []
    },
    {
      title: "ConvertToSQL",
      categories: ["Personnel"],
      images: [
        { src: "https://i.postimg.cc/SNwjCkj7/Convert-To-SQL.png", legend: "Interface du programme" }
      ],
      year: "2024",
      company: "Projet personnel",
      description: " Programme de conversion d'une couche vectorielle vers un fichier SQL",
      details: [
        "Utilisation du langage Python et du modeleur graphique de QGIS"
      ],
      keywords: ["Python", "QGIS", "SQL"],
      media: []
    },
    {
      title: "Géocodage des magasins franchisés",
      categories: ["Professionnel"],
      images: [],
      year: "2023",
      company: "KAPP RETAIL",
      description: "Automatiser le géocodage des points de vente, la génération et le scoring des zones commerciales",
      details: [
        "Collecter et mettre à jour les données des points de vente",
        "Géocoder les points de vente de différentes enseignes (création de scripts Python)",
        "Traitement statistique et analyse spatiale (croiser les attributs pour générer des scorings de zones, etc.)"
      ],
      keywords: ["Nominatim", "Géocodage", "Python", "QGIS", "OpenStreetMap", "PostgreSQL"],
      media: []
    },
    {
      title: "Atlas dynamique sur le Marché des professionnels ",
      categories: ["Professionnel"],
      images: [],
      year: "2022",
      company: "Crédit Agricole du Morbihan",
      description: "Développement d’Atlas dynamiques et d’études géomarketing",
      details: [
        "Conception d’une étude géomarketing pour l’implantation d’une nouvelle agence",
        "Création d’un atlas dynamique sur le marché des professionnels",
        "Géocodage de fichiers (Geoconcept Universal Geocoder)"
      ],
      keywords: ["Articque Platform", "SAS Enterprise Guide"],
      media: []
    },
    {
      title: "Portail SIG du Pays de Chantonnay (Interne)",
      categories: ["Professionnel"],
      images: [
        { src: "https://i.postimg.cc/Y9P5Ds0s/CCPC-portail-sig.png", legend: "Portail SIG" },
        { src: "https://i.postimg.cc/8CYGx5nZ/CCPC-portail-sig-actu.png", legend: "Portail SIG : bandeau actualité" },
        { src: "https://i.postimg.cc/T1Rt9jJT/CCPC-portail-sig-aide.png", legend: "Portail SIG : bandeau aide" },
        { src: "https://i.postimg.cc/fWGfstqZ/CCPC-CCPC-Consult.png", legend: "CCPC Consult" },
        { src: "https://i.postimg.cc/bwzbYQxY/CCPC-Geo-Voirie.png", legend: "GéoVoirie" },
        { src: "https://i.postimg.cc/N0XQWn53/CCPC-Geo-Voirie-video.png", legend: "GéoVoirie : vidéo tutoriel" },
        { src: "https://i.postimg.cc/tgQKV4g0/CCPC-Medi-Map.png", legend: "MédiMap" },
        { src: "https://i.postimg.cc/637bjsqm/CCPC-OZAE.png", legend: "OZAE" },
        { src: "https://i.postimg.cc/wj7Ns9GP/CCPC-Geo-Tourisme.png", legend: "GéoTourisme" },
        { src: "https://i.postimg.cc/nrVnCtZr/CCPC-page-connexion.png", legend: "Page de connexion" },
      ],
      year: "2024 - aujourd'hui",
      company: "CC du Pays de Chantonnay",
      description: "Développement et maintenance du portail SIG interne du Pays de Chantonnay",
      details: [
        "Portail SIG : porte d'entrée aux applications métiers",
        "CCPC Consult : consultation des données thématiques",
        "GéoVoirie : gestion des voiries",
        "MédiMap : référencement des professionnels de santé",
        "OZAE : suivi des zones d'activités économiques",
        "GéoTourisme : inventaire des points d'intérêt touristiques"
      ],
      keywords: ["GEO Générateur", "HTML", "CSS", "JavaScript","PostgreSQL", "PostGIS","SQL"],
      media: []
    },
    {
      title: "Portail cartographique du Pays de Chantonnay (Grand public)",
      categories: ["Professionnel"],
      images: [
        { src: "https://i.postimg.cc/fbyfsV1K/CCPC-portail-carto.png", legend: "Portail cartographique" },
        { src: "https://i.postimg.cc/Jz6jp1tZ/CCPC-tourisme.png", legend: "Tourisme" },
        { src: "https://i.postimg.cc/Dw8Sy1yw/CCPC-tourisme-resultat.png", legend: "Tourisme avec résultats" },
        { src: "https://i.postimg.cc/MG5NPfV7/CCPC-sante-resultat.png", legend: "Santé avec résultats" },
        { src: "https://i.postimg.cc/5N93gKpZ/CCPC-economie.png", legend: "Économie" },
        { src: "https://i.postimg.cc/rmC1C54w/CCPC-economie-resultat.png", legend: "Économie avec résultats" },

      ],
      year: "2024 - aujourd'hui",
      company: "CC du Pays de Chantonnay",
      description: "Développement et maintenance du portail cartographique grand public du Pays de Chantonnay",
      details: [
        "Application Tourisme",
        "Application Santé",
        "Application Économie"
      ],
      keywords: ["GEO Générateur", "HTML", "CSS", "JavaScript","PostgreSQL", "PostGIS","SQL"],
      media: [
        { type: "demo", title: "Tourisme", url: "http://paysdechantonnay.business-geografic.com/tourisme/" },
        { type: "demo", title: "Santé", url: "http://paysdechantonnay.business-geografic.com/sante/" },
        { type: "demo", title: "Économie", url: "http://paysdechantonnay.business-geografic.com/economie/" },
        { type: "demo", title: "Portail Cartographique", url: "#" }
      ]
    },
    {
      title: "Gestion de budget",
      categories: ["Personnel"],
      images: [
        { src: "https://i.postimg.cc/G2RqSv5z/Gestion-budget.png", legend: "Interface principale" }
      ],
      year: "2025",
      company: "Projet personnel",
      description: "Outil de suivi et de gestion de budget sous Google Sheets automatisé",
      details: [
        "Utilisation de Google Sheets avec des scripts Google Apps Script pour automatiser certaines tâches",
        "Création de formulaires Google Forms pour la collecte de données"
      ],
      keywords: ["Google Sheets", "Google Forms", "Google Apps Script", "JavaScript"],
      media: []
    },

    {
      title: "Atlas des zones d'activité économique",
      categories: ["Professionnel", "Carte"],
      images: [
        { src: "https://i.postimg.cc/jSSzRHTq/atlas-ZAE-1.jpg", legend: "Extrait page 1" },
        { src: "https://i.postimg.cc/xdghcyJ7/atlas-ZAE-2.jpg", legend: "Extrait page 2" },
        { src: "https://i.postimg.cc/QdjrCMYT/atlas-ZAE-3.jpg", legend: "Extrait page 3" },
        { src: "https://i.postimg.cc/P5S0qQwT/atlas-ZAE-4.jpg", legend: "Extrait page 4" },
        { src: "https://i.postimg.cc/6550QJVF/atlas-ZAE-5.jpg", legend: "Extrait page 5" },
      ],
      year: "2024",
      company: "CC Pays de Chantonnay",
      description: "Création d'un inventaire des zones d'activité économique du territoire",
      details: [
        "Collecte des données",
        "Cartographie des zones d'activité",
        "Rédaction d'un rapport synthétique"
      ],
      keywords: ["QGIS", "Excel","Word","SQL","PostgreSQL", "PostGIS"],
      media: []
    }
    // {
    //   title: "Cartes diverses",
    //   categories: ["Professionnel", "Formation", "Carte"],
    //   images: [
    //     { src: "X", legend: "X" }
    //   ],
    //   year: "",
    //   company: "",
    //   description: "Diverses cartes réalisées dans un cadre professionnel ou lors de formations",
    //   details: [],
    //   keywords: ["QGIS", "ArcGIS PRO"],
    //   media: []
    // }
    // {
    //   title: "ProjetJR - Mon 1er site web",
    //   categories: ["Personnel"],
    //   images: [
    //     { src: "X", legend: "X" }
    //   ],
    //   year: "X",
    //   company: "X",
    //   description: "X",
    //   details: [
    //     "X",
    //     "X"
    //   ],
    //   keywords: ["X", "X", "X"],
    //   media: [
    //     { type: "", title: "Oslandia", url: "https://oslandia.com/" }
    //   ]
    // },
    // {
    //   title: "Projet Python divers",
    //   categories: ["Formation"],
    //   images: [
    //     { src: "X", legend: "X" }
    //   ],
    //   year: "X",
    //   company: "X",
    //   description: "X",
    //   details: [
    //     "X",
    //     "X"
    //   ],
    //   keywords: ["X", "X", "X"],
    //   media: [
    //     { type: "", title: "Oslandia", url: "https://oslandia.com/" }
    //   ]
    // },
    // {
    //   title: "Projet Javascript divers",
    //   categories: ["Formation"],
    //   images: [
    //     { src: "X", legend: "X" }
    //   ],
    //   year: "X",
    //   company: "X",
    //   description: "X",
    //   details: [
    //     "X",
    //     "X"
    //   ],
    //   keywords: ["X", "X", "X"],
    //   media: [
    //     { type: "", title: "Oslandia", url: "https://oslandia.com/" }
    //   ]
    // }
  ]

};

export { projet };