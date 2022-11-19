import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  headScripts: [],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: routes,
  proxy: proxy,
  npmClient: 'npm',
});

