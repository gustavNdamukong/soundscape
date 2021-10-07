import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'
import PlaylistDetails from '../views/playlists/PlaylistDetails.vue'
import UserPlaylists from '../views/playlists/UserPlaylists.vue'

// route guard
import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  //detect current user
  let user = projectAuth.currentUser
  // only allow access to login/signup route if they are NOT authenticated, else send them to 
  // the Home view 
  if (user) {
      // the user is authenticated, so dont let them access this route. Redirect them to the Home route instead
      next({ name: 'Home' })
  } else {
      // the user is not authenticated, so allow them proceed to their intended login/signup route
      next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: requireNoAuth
  },
  {
    path: '/playlist/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  {
    path: '/playlist/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/playlists/user',
    name: 'UserPlaylists',
    component: UserPlaylists,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
