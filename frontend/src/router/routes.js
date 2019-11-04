import MgtBoardView from '@/components/templates/MgtBoardView.vue'
import MgtLoginView from '@/components/templates/MgtLoginView'
import MgtTaskDetailModal from '@/components/templates/MgtTaskDetailModal'

export default [
  {
    path: '/',
    component: MgtBoardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: MgtLoginView
  },
  {
    path: '/tasks/:id',
    component: MgtTaskDetailModal,
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    redirect: '/'
  }
]
