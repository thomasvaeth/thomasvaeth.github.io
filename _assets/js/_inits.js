// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscBarba } from './components/_miscellaneous.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Inits
  miscBarba();

  if ($('.posts').length && $('.posts__next').length) {
    InfiniteScroll.init();
  }

});
