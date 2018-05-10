// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import AOS from 'aos';
import { miscBarba } from './components/_miscellaneous.js'
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
  PleaseDontGo.init();

  miscBarba();

});
