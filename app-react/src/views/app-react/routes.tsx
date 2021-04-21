const routes: RouteConfig[] = [
  {
    name: 'home',
    path: '/',
    redirectTo: '/app-react',
  },

  {
    name: 'app-react',
    path: '/app-react',
    asyncImport: () => import('./app-react'),
  },

  {
    name: 'app-react-page2',
    path: '/app-react/page2',
    asyncImport: () => import('./page2'),
  },
]

export default routes
