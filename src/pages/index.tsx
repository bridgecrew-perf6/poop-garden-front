import { barChart, people, paperPlaneOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export const pages = [
  {
    label: 'Friends List',
    path: '/tab1',
    icon: people,
    component: Tab1,
    isTab: true,
    redirect: false,
  },
  {
    label: 'Poop statistics',
    path: '/tab2',
    icon: barChart,
    component: Tab2,
    isTab: true,
    redirect: true,
  },
  {
    label: 'Show off poop!',
    path: '/tab3',
    icon: paperPlaneOutline,
    component: Tab3,
    isTab: true,
    redirect: false,
  },
  {
    label: 'Show off poop!',
    path: '/tab4',
    icon: paperPlaneOutline,
    component: Tab2,
    isTab: false,
    redirect: false,
  },
]