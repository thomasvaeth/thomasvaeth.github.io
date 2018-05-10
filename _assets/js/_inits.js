// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import AOS from 'aos';
import PageTransition from './components/_pageTransition.js';
import PleaseDontGo from './components/_pleaseDontGo.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Inits
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true
  });
  PageTransition.init();
  PleaseDontGo.init();

});
