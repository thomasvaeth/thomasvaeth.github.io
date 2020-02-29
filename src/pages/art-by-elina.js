import React from 'react';
import Project from '../templates/Project';
import useAnimateOnScroll from '../utils/useAnimateOnScroll';

import mastImage from '../images/work/art-by-elina/mast.jpg';

function ArtByElinaPage(props) {
  useAnimateOnScroll();

  return (
    <Project
      title="Art by Elina"
      image={mastImage}
    >
      <div className="study__intro section-padding--double bg-white">
        <div className="grid-small">
          <h2>
            <span data-aos="slice-up" data-aos-duration="400">Inspired paintings</span>
          </h2>
          <p data-aos="fade-in" data-aos-duration="400" data-aos-delay="100">Elina Dmitruk is a fine artist using oil paints to create inspired paintings both realistic and imaginary. She needed a website to tell her story and showcase her work. I partnered with Mary Rauzi at <a href="https://embrcreative.com/" target="_blank" rel="noopener noreferrer">Embr Creative</a>, who redesigned the website, while I handled the redevelopment of a generic Squarespace page to a custom WordPress build.</p>
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <div className="browser" data-aos="fade-in">
            <span className="browser__dots"></span>
            <figure className="browser__img">
              <img src="/assets/images/work/art-by-elina/menu-1.jpg" alt="Art by Elina Menu"/>
            </figure>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <div className="study__double">
            <div>
              <div className="browser" data-aos="fade-in">
                <span className="browser__dots"></span>
                <figure className="browser__img">
                  <img src="/assets/images/work/art-by-elina/home.jpg" alt="Art by Elina Home Page"/>
                </figure>
              </div>
            </div>
            <div>
              <div className="browser" data-aos="fade-in" data-aos-delay="400">
                <span className="browser__dots"></span>
                <figure className="browser__img">
                  <img src="/assets/images/work/art-by-elina/about.jpg" alt="Art by Elina About Page"/>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <div className="browser" data-aos="fade-in">
            <span className="browser__dots"></span>
            <figure className="browser__img">
              <img src="/assets/images/work/art-by-elina/gallery.jpg" alt="Art by Elina Gallery Page"/>
            </figure>
          </div>
        </div>
      </div>
    </Project>
  );
}

export default ArtByElinaPage;
