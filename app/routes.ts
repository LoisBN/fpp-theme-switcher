import { type RouteConfig, index, route, layout } from '@react-router/dev/routes';

export const routes: RouteConfig = [
  layout('root.tsx', [
    index('routes/home.tsx'),
    route('settings', 'routes/settings.tsx'),
  ]),
];