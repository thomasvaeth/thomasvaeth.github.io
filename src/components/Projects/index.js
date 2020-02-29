import React from 'react';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';
import Project from '../Project';

import './index.scss';

function Projects(props) {
  useAnimateOnScroll();

  const leftProjects = [];
  const rightProjects = [];

  props.projects.forEach((project, idx) => {
    const link = project.title.replace(/[ ++]/g, '-').replace(/&/g, '').toLowerCase();

    if (idx % 2 === 0) {
      leftProjects.push(<Project key={link} link={`/${link}/`} {...project} />);
    } else {
      rightProjects.push(<Project key={link} link={`/${link}/`} {...project} />);
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
