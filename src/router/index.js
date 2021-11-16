import { createRouter, createWebHistory } from 'vue-router'
import Top10 from '../views/list/top10/Top10.vue'
import Game from '../views/list/game/Game.vue'

const routes = [{
        path: '/',
        name: 'Top10',
        component: Top10
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router