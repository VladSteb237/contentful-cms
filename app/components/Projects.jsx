"use client";
import React from "react";
import { useFetchProjects } from "../fetchProjects.jsx";
import Link from "next/link";

const Projects = () => {
  const { projects, loading } = useFetchProjects();
  //console.log(projects, loading);

  if (loading)
    return (
      <section className="projects">
        <div className="title">
          <h2>Loading...</h2>
        </div>
      </section>
    );

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, img, url } = project;
          return (
            <Link
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project">
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
