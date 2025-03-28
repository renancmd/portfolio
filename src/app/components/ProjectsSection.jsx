"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Unboredom",
    tech: "HTML, CSS, JavaScript",
    description: "Mini jogos para jogar quando estiver entediado.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/renancmd/unboredom",
    previewUrl: "https://unboredom-7ctzd418e-renan-mendes-projects-8a8d1802.vercel.app/index.html", 
  },
  {
    id: 2,
    title: "Verde Diff",
    tech: "Python",
    description: "Comparador de Saídas para o Verde - PUC Minas (Verde Diff)",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/renancmd/verde-diff",
    previewUrl: "https://github.com/renancmd/verde-diff",
  },
  {
    id: 3,
    title: "Procura Cine",
    tech: "NextJS, TypeScript, Sass",
    description: "Usa API para exibir informações de filmes para que usuários possam decidir o que assistir",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/renancmd/procura-cine",
    previewUrl: "https://procura-cine.vercel.app/",
  },
  {
    id: 4,
    title: "FridgeEasy - (EM DESENVOLVIMENTO)",
    tech: "Java (Spark, Maven), PostgreeSQL, JavaScript",
    description: "Receitas fáceis para ingredientes que o usuário possui em casa. - Trabalho Interdisciplinar de Ciências da Computação",
    image: "/images/projects/4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2025-1-g19-fridgeeasy",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
