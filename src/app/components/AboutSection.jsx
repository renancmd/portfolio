"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
          <li>NextJS, TypeScript</li>
          <li>C, C++, Java (Spark, Maven, SpringBoot)</li>
          <li>Python</li>
          <li>PostgreSQL, MySQL</li>
          <li>JWT, Bcrypt, Docker</li>
          <li>SCRUM</li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ensino Médio (Completo) | 2020 - 2022</li>
        <li>Bacharelado em Ciência da Computação | 2024 - Atualmente</li>
        <li>Computer Science (CS50x) by HavardX | 2025 - Atualmente</li>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://www.cambly.com/en/certificate/verify/ac3c8d84?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Cambly
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            100 Days of Code: Python Pro Bootcamp
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="py-8 px-4 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Educação
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certificações
          </TabButton>
        </div>
        <div className="mt-8" style={{ minHeight: "150px" }}>
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
