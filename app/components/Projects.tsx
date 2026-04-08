"use client";

import React, { useState } from "react";
import { useLocale } from "../i18n/LocaleProvider";
import Image from "next/image";
import { motion } from "framer-motion";

function Projects() {
  const { t } = useLocale();
  const projects = t("projects.items") as Array<{
    title: string;
    role: string;
    description: string;
    highlights: string[];
    tech: string[];
    image: string;
    status: string;
    link?: string;
    shortDescription?: string;
  }>;

  const [filter, setFilter] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<{
    title: string;
    role: string;
    description: string;
    highlights: string[];
    tech: string[];
    image: string;
    status: string;
    link?: string;
    shortDescription?: string;
  } | null>(null);

  const filteredProjects = filter
    ? projects.filter(
        (project) => project.status === filter || project.tech.includes(filter),
      )
    : projects;

  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      live: "bg-green-600",
      archived: "bg-gray-600",
      wip: "bg-yellow-600",
    };
    return (
      <span
        className={`px-2 py-1 text-xs rounded text-white ${
          statusStyles[status] || "bg-gray-400"
        }`}
      >
        {status.toUpperCase()}
      </span>
    );
  };

  return (
    <motion.section
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded ${
              !filter ? "bg-blue-600" : "bg-gray-600"
            } text-white`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("live")}
            className={`px-4 py-2 rounded ${
              filter === "live" ? "bg-blue-600" : "bg-gray-600"
            } text-white`}
          >
            Ativos
          </button>
          <button
            onClick={() => setFilter("wip")}
            className={`px-4 py-2 rounded ${
              filter === "wip" ? "bg-blue-600" : "bg-gray-600"
            } text-white`}
          >
            Em Progresso
          </button>
          <button
            onClick={() => setFilter("archived")}
            className={`px-4 py-2 rounded ${
              filter === "archived" ? "bg-blue-600" : "bg-gray-600"
            } text-white`}
          >
            Arquivados
          </button>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          {Array.from(new Set(projects.flatMap((p) => p.tech))).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded ${
                filter === tech ? "bg-blue-600" : "bg-gray-600"
              } text-white`}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  {getStatusBadge(project.status)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.role}</p>
                <p className="text-gray-300 mb-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700 rounded text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setModalProject(project)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Ver mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {modalProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full relative">
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{modalProject.role}</p>
              <p className="text-gray-300 mb-4">{modalProject.description}</p>
              <ul className="list-disc list-inside text-gray-400 mb-4">
                {modalProject.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {modalProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-700 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Status:{" "}
                <span className="font-semibold text-gray-300">
                  {modalProject.status}
                </span>
              </p>
              {modalProject.link && (
                <a
                  href={modalProject.link}
                  target="_blank"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Ver projeto
                </a>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const currentIndex = projects.findIndex(
                      (p) => p.title === modalProject.title,
                    );
                    const prevProject =
                      projects[
                        (currentIndex - 1 + projects.length) % projects.length
                      ];
                    setModalProject(prevProject);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Anterior
                </button>
                <button
                  onClick={() => {
                    const currentIndex = projects.findIndex(
                      (p) => p.title === modalProject.title,
                    );
                    const nextProject =
                      projects[(currentIndex + 1) % projects.length];
                    setModalProject(nextProject);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Próximo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;
