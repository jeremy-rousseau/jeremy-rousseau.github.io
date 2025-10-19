import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: false, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const greeting = {
  username: "Jeremy Rousseau",
  title: "Salut, je m’appelle Jérémy",
  subTitle: emoji(
    "Géomaticien passionné et polyvalent ayant une expertise dans la transformation de données spatiales brutes en informations stratégiques. J'utilise les SIG, la cartographie interactive et les bases de données spatiales pour résoudre des problèmes complexes."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jeremy-rousseau",
  linkedin: "https://www.linkedin.com/in/jérémy-rousseau/",
  gmail: "jeremy.rousseau.pro@outlook.fr",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "Qu’est-ce que je fais ?",
  subTitle: "Géomaticien curieux qui veut explorer plein de techno",
  skills: [
    "... et qui utilise plein de logiciels",
  ],
  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
        {
      skillName: "R",
      fontAwesomeClassname: "fa-solid fa-r"
    },
        {
      skillName: "VBA",
      fontAwesomeClassname: "fa-solid fa-table"
    }
  ],
  logicielSkills: [
    {
      nom: "ArcGIS Pro",
      logo: require("./assets/images/ArcGis.png")
    },
    {
      nom: "Articque Platform",
      logo: require("./assets/images/Articque_Platform.png")
    },
    {
      nom: "GEO Générateur",
      logo: require("./assets/images/GEO.png")
    },
    {
      nom: "PostgreSQL / PostGIS",
      logo: require("./assets/images/PostgreSQL.png")
    },
    {
      nom: "GeoNetwork",
      logo: require("./assets/images/GeoNetwork.png")
    },
    {
      nom: "Power BI",
      logo: require("./assets/images/Power_BI.png")
    },
    {
      nom: "FME",
      logo: require("./assets/images/FME.png")
    },
    {
      nom: "QGIS",
      logo: require("./assets/images/QGIS.png")
    },
    {
      nom: "RStudio",
      logo: require("./assets/images/R.png")
    },
    {
      nom: "Suite Office",
      logo: require("./assets/images/Office_365.png")
    },
    {
      nom: "GitHub",
      logo: require("./assets/images/Github.png")
    },
    {
      nom: "SAS Enterprise Guide",
      logo: require("./assets/images/SAS.png")
    },
    {
      nom: "JOSM",
      logo: require("./assets/images/JOSM.png")
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Institut d'Urbanisme et de Géographie Alpine - Université Grenoble Alpes",
      logo: require("./assets/images/UGA.png"),
      subHeader: "Master Géographie, Aménagement, Environnement et Développement (GAED), Parcours Géomatique et Analyse Spatiale (GEOMAS)",
      duration: "2021 - 2023",
      desc: emoji("👨‍🎓 Mention BIEN"),
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "IUT2 Grenoble",
      logo: require("./assets/images/IUT2.png"),
      subHeader: "Licence professionnelle, Etudes Statistiques et Systèmes d'Information Géographique (ESSIG)",
      duration: "2020 - 2021"
    },
    {
      schoolName: "IUT de Vannes",
      logo: require("./assets/images/IUT_Vannes.png"),
      subHeader: "Diplôme universitaire de technologie, Statistique et Informatique Décisionnelle (STID)",
      duration: "2018 - 2020"
    }
  ]
};


// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Géomaticien",
      company: "CC du Pays de Chantonnay",
      companylogo: require("./assets/images/CCPC.png"),
      date: "Février 2024 – aujourd'hui",
      desc: emoji("💼 CCD 📍 Chantonnay, Pays de la Loire, France"),
      descBullets: [
        "Concevoir et gérer un service SIG",
        "Créer, développer et mettre à jour les bases de données géographiques",
      ],
      bannerColor: "rgb(188, 36, 122)"
    },
    {
      role: "Géomaticien & Data Analyst",
      company: "KAPP RETAIL",
      companylogo: require("./assets/images/Kapp_retail.png"),
      date: "septembre 2022 – septembre 2023",
      desc: emoji("💼 Alternance 📍 Villeurbanne, Auvergne-Rhône-Alpes, France"),
      descBullets: [
        "Automatiser le géocodage des points de vente, la génération et le scoring des zones commerciales",
      ],
      bannerColor: "rgb(0, 0, 34)"
    },
    {
      role: "Assistant en Géomarketing",
      company: "Crédit Agricole du Morbihan",
      companylogo: require("./assets/images/CA.png"),
      date: "Avril 2022 – Août 2022",
      desc: "💼 Stage 📍 Vannes, Bretagne, France",
      descBullets: [
        "Développement d’Atlas dynamiques et d’études géomarketing",
        "Conception d’une étude géomarketing pour l’implantation d’une nouvelle agence"
      ],
      bannerColor: "rgb(0, 109, 74)"
    }
  ]
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false 
};

const contactInfo = {
  title: emoji("Contactez-moi 📧"),
  subtitle:
    emoji("Pour en savoir plus, n’hésitez pas à me contacter 😉"),
  number: "",
  email_address: "jeremy.rousseau.pro@outlook.fr"
};

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  contactInfo,
  resumeSection
};
