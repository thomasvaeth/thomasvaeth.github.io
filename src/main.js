import { mount } from 'svelte';
import Lenis from 'lenis';
import App from './App.svelte';

import './styles/fonts.scss';
import './styles/app.scss';

const lenis = new Lenis();

const raf = (time) => {
  lenis.raf(time);

  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
