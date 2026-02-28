import { mount } from 'svelte';
import App from './App.svelte';

import './styles/fonts.scss';
import './styles/app.scss';

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
