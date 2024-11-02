import React from "react";
import { useInView } from "react-intersection-observer";
import SectionWithFade from "./OtherComponents/SectionWithFade";
import JourneyInfos from "./OtherComponents/JourneyInfos";
const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const educationData = [
    {
      date: "Sept 2023 - Juill 2025",
      title: "Master en Ingénierie Logicielle",
      description:
        "Études avancées en génie logiciel et systèmes intelligents, mettant l'accent sur le développement d'applications innovantes.",
    },
    {
      date: "Sept 2022 - Juill 2023",
      title: "Licence en Génie Logiciel",
      description:
        "Formation approfondie en développement logiciel, avec une spécialisation en conception et architecture de systèmes.",
    },
    {
      date: "Déc 2020 - Juin 2022",
      title: "Licence Préparatoire en Informatique",
      description:
        "Préparation académique solide en informatique, couvrant les bases de la programmation et des structures de données.",
    },
    {
      date: "Sept 2019 - Sept 2020",
      title: "Baccalauréat Math-Tech",
      description:
        "Formation en mathématiques appliquées, obtenue avec une mention assez bien.",
    },
  ];

  const experienceData = [
    {
      date: "Sept 2024 - Oct 2024",
      title: "Stagiaire Web, Prodigy Infotech",
      description:
        "Création d'une page responsive, d'un jeu de Tic-Tac-Toe, et d'une application de chronomètre, tout en concevant un portfolio personnel.",
    },
    {
      date: "Mars 2024 - Avril 2024",
      title: "Stage en Télécom, Algérie Telecom",
      description:
        "Participation à la maintenance des équipements, installation des lignes, et suivi des services Internet pour les abonnés.",
    },
    {
      date: "Déc 2023 - Jan 2024",
      title: "Dev. App Mobile, Projet Sijili",
      description:
        "Développement de l'application 'Sijili' pour gérer les demandes de registre de commerce avec Java et Node.js.",
    },
    {
      date: "Mars 2023 - Juin 2023",
      title: "Projet Gestion Équipements",
      description:
        "Application web pour gérer des équipements de manière optimisée, développée avec ReactJS, Django et travail d'équipe collaboratif.",
    },
  ];

  return (
    <>
      <section className="education" id="education" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={250}
          distance={"25px"}
          direction={{ center: true }}
        >
          <h2 className="heading">
            Mon <span>Parcours</span>
          </h2>
        </SectionWithFade>
        <div className="education-content">
          <div className="education-infos">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ left: true }}
            >
              <h3>Éducation</h3>
            </SectionWithFade>

            {}
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ left: true }}
            >
              <span>
                {educationData.map((e) => {
                  return (
                    <JourneyInfos
                      date={e.date}
                      title={e.title}
                      description={e.description}
                    />
                  );
                })}
              </span>
            </SectionWithFade>
          </div>
          <div className="education-infos">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ right: true }}
            >
              <h3>Expérience</h3>
            </SectionWithFade>
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ right: true }}
            >
              <span>
                {experienceData.map((e) => {
                  return (
                    <JourneyInfos
                      date={e.date}
                      title={e.title}
                      description={e.description}
                    />
                  );
                })}
              </span>
            </SectionWithFade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
