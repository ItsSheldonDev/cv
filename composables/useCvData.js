export const useCvData = () => {
    const cvData = ref(null);
    const isLoading = ref(true);
    const error = ref(null);
  
    // URL du fichier JSON sur GitHub (à remplacer par votre URL réelle)
    const jsonUrl = 'https://raw.githubusercontent.com/ItsSheldonDev/ItsSheldonDev/refs/heads/main/cv/profile-data.json';
  
    const fetchData = async () => {
      isLoading.value = true;
      error.value = null;
  
      try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement des données (${response.status})`);
        }
        
        cvData.value = await response.json();
        isLoading.value = false;
      } catch (e) {
        console.error('Erreur lors du chargement des données CV:', e);
        error.value = e.message;
        isLoading.value = false;
  
        // Données de secours en cas d'erreur (pour le développement)
        cvData.value = {
          profile: {
            name: "Votre Nom",
            firstName: "Prénom",
            title: "Développeur Fullstack",
            description: "Développeur Fullstack passionné par la création d'applications web innovantes et performantes",
            photo: "https://github.com/votre-username.png" // URL de l'avatar GitHub par défaut
          },
          about: {
            description: "Développeur passionné avec plus de X ans d'expérience dans la création d'applications web modernes. Spécialisé dans les écosystèmes Vue.js et React, avec une forte expertise en développement backend avec Node.js.",
            stats: [
              { value: "X+", label: "Années d'expérience" },
              { value: "Y+", label: "Projets réalisés" },
              { value: "Z+", label: "Clients satisfaits" }
            ]
          },
          skills: {
            frontend: [
              { name: "Vue.js", level: 95 },
              { name: "React", level: 90 },
              { name: "TypeScript", level: 90 },
              { name: "TailwindCSS", level: 85 },
              { name: "Nuxt.js", level: 88 }
            ],
            backend: [
              { name: "Node.js", level: 90 },
              { name: "NestJS", level: 85 },
              { name: "Express", level: 90 },
              { name: "APIs RESTful", level: 95 },
              { name: "GraphQL", level: 80 }
            ],
            other: [
              "UI/UX Design", "Git", "Docker", "AWS", "CI/CD", "Agile/Scrum",
              "Testing", "Performance Optimization", "SEO", "Mobile-First",
              "Responsive Design", "Progressive Web Apps"
            ]
          },
          experience: [
            {
              period: "2022 - Présent",
              title: "Développeur Fullstack Senior",
              company: "Entreprise XYZ",
              description: "Développement d'applications web modernes avec Vue.js et NestJS. Mise en place d'architectures scalables et optimisation des performances.",
              tags: ["Vue 3", "TypeScript", "NestJS", "PostgreSQL"]
            },
            {
              period: "2020 - 2022",
              title: "Développeur Frontend",
              company: "Startup ABC",
              description: "Développement d'interfaces utilisateur réactives et accessibles. Amélioration continue de l'expérience utilisateur et refactoring de code.",
              tags: ["React", "Next.js", "TailwindCSS"]
            },
            {
              period: "2018 - 2020",
              title: "Développeur Web",
              company: "Agence Web DEF",
              description: "Création de sites web et applications sur mesure pour divers clients. Travail en équipe sur des projets variés avec différentes technologies.",
              tags: ["JavaScript", "PHP", "MySQL"]
            }
          ],
          education: [
            {
              period: "2016 - 2018",
              degree: "Master en Développement Web",
              institution: "Université de Technologie",
              description: "Spécialisation en développement d'applications web et mobiles. Projets académiques sur les architectures modernes et les frameworks JS."
            },
            {
              period: "2013 - 2016",
              degree: "Licence en Informatique",
              institution: "Université des Sciences",
              description: "Formation en informatique générale avec une spécialisation en développement logiciel et algorithmes."
            }
          ],
          projects: [
            {
              id: 1,
              title: "aloha-ss-backend",
              tech: "TypeScript",
              techIcon: "vscode-icons:file-type-typescript",
              description: "Official API for Aloha-Secourisme, a training center specialized in first aid and sea rescue...",
              tags: ["api", "backend", "nestjs"],
              githubUrl: "https://github.com/johndoe/aloha-ss-backend"
            },
            {
              id: 2,
              title: "aloha-ss-frontend",
              tech: "TypeScript",
              techIcon: "vscode-icons:file-type-typescript",
              description: "Official website for Aloha-Secourisme, a training center specialized in first aid and sea rescue...",
              tags: ["frontend", "nextjs", "react"],
              githubUrl: "https://github.com/johndoe/aloha-ss-frontend",
              demoUrl: "https://aloha-secourisme.com"
            },
            {
              id: 3,
              title: "Cabane-Dashboard",
              tech: "PHP",
              techIcon: "vscode-icons:file-type-php",
              description: "An admin dashboard to get stats on restaurant card QRcode scans",
              tags: ["fullstack", "php", "web-app"],
              githubUrl: "https://github.com/johndoe/Cabane-Dashboard"
            }
          ]
        };
      }
    };
  
    // Charger les données au montage
    onMounted(() => {
      fetchData();
    });
  
    return {
      cvData,
      isLoading,
      error,
      fetchData
    };
  };