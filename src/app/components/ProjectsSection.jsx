"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Organizer",
    tech: "Java, Spring Boot, Docker, PgSQL, NextJS, Typescript ",
    description: "Aplicação web full stack. To-Do App com autenticação segura usando RestAPI, JWT e Bcrypt.",
    image: "/images/projects/my-organizer.png",
    tag: ["Destaques", "Web"],
    gitUrl: "https://github.com/renancmd/my-organizer-server",
    previewUrl: "https://my-organizer-client.vercel.app/sign-in",
  },
  {
    id: 2,
    title: "Minecraft MOD: Drops Off",
    tech: "Java, Gradle, Minecraft Mod, Fabric API",
    description: "Mod para Minecraft que desabilita a coleta de itens através de uma tecla de atalho.",
    image: "/images/projects/drops-off.png",
    tag: ["Destaques", "Web"],
    gitUrl: "https://github.com/renancmd/drops-off-mod",
    previewUrl: "https://github.com/renancmd/drops-off-mod",
  },
  {
    id: 3,
    title: "Verde Diff",
    tech: "Python",
    description: "Comparador de Saídas para o Verde - PUC Minas (Verde Diff)",
    image: "/images/projects/2.png",
    tag: ["Destaques", "CLI"],
    gitUrl: "https://github.com/renancmd/verde-diff",
    previewUrl: "https://github.com/renancmd/verde-diff/blob/main/README.md",
  },
  {
    id: 4,
    title: "FridgeEasy - (EM DESENVOLVIMENTO)",
    tech: "Java (Spark, Maven), PostgreSQL, JavaScript",
    description: "Receitas fáceis para ingredientes que o usuário possui em casa. - Trabalho Interdisciplinar de Ciências da Computação",
    image: "/images/projects/4.jpeg",
    tag: ["Destaques", "Web"],
    gitUrl: "https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2025-1-g19-fridgeeasy",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Procura Cine",
    tech: "NextJS, TypeScript, Sass",
    description: "Consome uma API para exibir informações de filmes para que usuários possam decidir o que assistir",
    image: "/images/projects/3.jpeg",
    tag: ["Destaques", "Web"],
    gitUrl: "https://github.com/renancmd/procura-cine",
    previewUrl: "https://procura-cine.vercel.app/",
  },
  {
    id: 6,
    title: "Unboredom",
    tech: "HTML, CSS, JavaScript",
    description: "Mini jogos para jogar quando estiver entediado.",
    image: "/images/projects/1.png",
    tag: ["Destaques", "Web"],
    gitUrl: "https://github.com/renancmd/unboredom",
    previewUrl: "https://unboredom-7ctzd418e-renan-mendes-projects-8a8d1802.vercel.app/index.html", 
  },
  {
    id: 7,
    title: "Jogo da cobrinha",
    tech: "Python, Turtle",
    description: "Clássico jogo da cobrinha, projeto para estudar POO em python.",
    image: "/images/projects/python-logo.png",
    tag: ["CLI"],
    gitUrl: "https://github.com/renancmd/snake-game",
    previewUrl: "https://github.com/renancmd/snake-game", 
  },
  {
    id: 8,
    title: "Advinhe o estado (USA)",
    tech: "Python, Turtle",
    description: "Mini game para tentar advinhar os 50 estados dos Estados Unidos.",
    image: "/images/projects/python-logo.png",
    tag: ["CLI"],
    gitUrl: "https://github.com/renancmd/us-state-game",
    previewUrl: "https://github.com/renancmd/us-state-game", 
  },
  {
    id: 9,
    title: "Cross turle, cross!",
    tech: "Python, Turtle",
    description: "Game simples estilo Crossy road para treinar uso de bibliotecas python.",
    image: "/images/projects/python-logo.png",
    tag: ["CLI"],
    gitUrl: "https://github.com/renancmd/turtle-crossing-game",
    previewUrl: "https://github.com/renancmd/turtle-crossing-game", 
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Destaques");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Destaques"
          isSelected={tag === "Destaques"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CLI"
          isSelected={tag === "CLI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              tech={project.tech}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
