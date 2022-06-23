import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export const directorSidebar = [
  {
    title: 'Dashboard',
    path: '/director/companies',
    icon: <Icon icon="bx:user-pin" width={22} height={22} />
  },
  {
    title: 'Statistika',
    path: '/director/statistics',
    icon: <Icon icon="ant-design:pie-chart-outlined" width={22} height={22} />
  }
];
const sidebarConfig = [
  {
    title: 'Yangiliklar',
    path: '/dashboard/companies',

    icon: <Icon icon="typcn:news" width={22} height={22} />
  },
  {
    title: 'Dashboard',
    path: '/dashboard/account',

    icon: <Icon icon="bx:user-pin" width={22} height={22} />
  },
  {
    title: 'Reyting',
    path: '/dashboard/reyting',
    icon: <Icon icon="ic:twotone-star-rate" width={22} height={22} />
  },
  {
    title: "Ma'lumot yuborish",
    path: '/dashboard/add-news',
    icon: <Icon icon="bi:send-x-fill" width={22} height={22} />
  }
];

export default sidebarConfig;
