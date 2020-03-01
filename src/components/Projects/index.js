import React from 'react';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';
import Project from '../Project';
import slugify from '../../utils/slugify';

import './index.scss';

function Projects(props) {
  useAnimateOnScroll();

  const leftProjects = [];
  const rightProjects = [];

  props.projects.forEach((project, idx) => {
    const slug = `/${slugify(project.title)}/`;

    if (idx % 2 === 0) {
      leftProjects.push(<Project key={slug} link={slug} {...project} />);
    } else {
      rightProjects.push(<Project key={slug} link={slug} {...project} />);
    }
  });

  return (
    <section id="projects" className="projects section-padding bg-lightgrey">
      <div className="grid">
        <h2 className="projects__title">
          <span data-aos="slice-up" data-aos-duration="400">Selected</span> <span data-aos="slice-up" data-aos-duration="400" data-aos-delay="100">projects</span>
        </h2>
        <div className="projects__container">
          <div>
            {leftProjects}
          </div>
          <div>
            {rightProjects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
