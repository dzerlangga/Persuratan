import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const SuratJalan = React.lazy(() => import('./views/Content/SuratJalan/index'));
const Faktur = React.lazy(() => import('./views/Content/Faktur/index'));
const Pendataan = React.lazy(() => import('./views/Content/Pendataan/index'));

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Dashboard  },
  { path: '/home/surat', name: 'Surat Jalan', component: SuratJalan },
  { path: '/home/faktur', name: 'Faktur', component: Faktur },
  { path: '/home/pendataan', name: 'Pendataan', component: Pendataan }
];

export default routes;
