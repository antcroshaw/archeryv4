import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Handicaps from '../components/Handicaps'
import About from '../components/About'
import HandicapDetails from '../components/HandicapDetails'
import Categories from '../components/Categories'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/handicaps',
    name: 'handicaps',
    component: Handicaps,
    props: true
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories,
    props: true
  },
  {
    path: '/handicaps/:id',
    name: 'HandicapDetails',
    component: HandicapDetails,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
