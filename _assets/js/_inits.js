// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscBarba, miscTime } from './components/_miscellaneous.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Inits
  miscBarba();
  miscTime();

  if ($('.posts').length && $('.posts__next').length) {
    InfiniteScroll.init();
  }

});
