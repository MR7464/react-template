import { Home, Detail, ErrorPage } from "../pages";
import {
  HomeOutlined
} from '@ant-design/icons';
const routes = [
  {
    path: "/",
    icon: HomeOutlined,
    title: '首页',
    component: Home,
  },
  {
    path: '/detail',
    component: Detail,
    icon: HomeOutlined,
    title: '详情',
    routes:[
      {
        path: '/detail/home',
        component: Home,
        icon: HomeOutlined,
        title: '详情首页'
      },
    ]
  },
  {
    path: '/detail2',
    component: Detail,
    icon: HomeOutlined,
    title: '详情',
    routes:[
      {
        path: '/detail2/home',
        component: Home,
        icon: HomeOutlined,
        title: '详情首页'
      },
    ]
  },
  {
    path: '*',
    component: ErrorPage
  }
]

export default routes