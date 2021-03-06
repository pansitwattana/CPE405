import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'

export const routes = [
  { path: '', component: Home, name: 'home' },
  // { path: '/user/:id', component: User}
  {
    path: '/user',
    component: User,
    children: [
      // add subroutes
      { path: '', component: UserStart }, // '/user/'
      { path: ':id', component: UserDetail }, // '/user/id'
      { path: ':id/edit', component: UserEdit, name: 'userEdit' } // '/user/id/edit
    ]
  }
]
