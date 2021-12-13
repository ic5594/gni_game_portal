import { createRouter, createWebHistory } from 'vue-router'
import Top10 from '../views/top10/Top10.vue'
import Starmon from '../views/top10/Starmon.vue'
import Goldrunner from '../views/top10/Goldrunner.vue'
import Matgo from '../views/top10/Matgo.vue'
import Spiritfreind from '../views/top10/Spiritfriend.vue'
import Offensehero from '../views/top10/Offensehero.vue'
import Heroallstarz from '../views/top10/Heroallstarz.vue'
import Herolegend from '../views/top10/Herolegend.vue'
import Jungletower from '../views/top10/Jungletower.vue'
import Toyracing from '../views/top10/Toyracing.vue'
import Cheezerun from '../views/top10/Cheezerun.vue'
import Game from '../views/game/Game.vue'
import Goshooter from '../views/game/Goshooter.vue'
import Battleking from '../views/game/Battleking.vue'
import Petmarble from '../views/game/Petmarble.vue'
import Dropanime from '../views/anime/Dropdownanime.vue'
import Kids from '../views/kids/Kids.vue'
import Event from '../views/event/Event.vue'
import Notice from '../views/notice/Notice.vue'
import Service from '../views/service/Service.vue'
import Mypage from '../views/mypage/Mypage.vue'
import Community from '../views/community/Community.vue'



const routes = [{
        path: '/',
        name: 'Top10',
        component: Top10
    },
    {
        path: '/starmon',
        name: 'Starmon',
        component: Starmon
    },
    {
        path: '/goldrunner',
        name: 'Goldrunner',
        component: Goldrunner
    },
    {
        path: '/matgo',
        name: 'Matgo',
        component: Matgo
    },
    {
        path: '/spiritfrined',
        name: 'Spiritfriend',
        component: Spiritfreind
    },
    {
        path: '/offensehero',
        name: 'Offensehero',
        component: Offensehero
    },
    {
        path: '/heroallstarz',
        name: 'Heroallstarz',
        component: Heroallstarz
    },
    {
        path: '/herolegend',
        name: 'Herolegend',
        component: Herolegend
    },
    {
        path: '/jungletower',
        name: 'Jungletower',
        component: Jungletower
    },
    {
        path: '/toyracing',
        name: 'Toyracing',
        component: Toyracing
    },
    {
        path: '/cheezerun',
        name: 'Cheezerun',
        component: Cheezerun
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    },
    {
        path: '/goshooter',
        name: 'Goshooter',
        component: Goshooter
    },
    {
        path: '/battleking',
        name: 'Battleking',
        component: Battleking
    },
    {
        path: '/petmarble',
        name: 'Petmarble',
        component: Petmarble
    },
    {
        path: '/dropanime',
        name: 'Dropanime',
        component: Dropanime
    },
    {
        path: '/kids',
        name: 'Kids',
        component: Kids
    },
    {
        path: '/event',
        name: 'Event',
        component: Event
    },
    {
        path: '/notice',
        name: 'Notice',
        component: Notice
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/mypage',
        name: 'Mypage',
        component: Mypage
    },
    {
        path: '/community',
        name: 'Community',
        component: Community
    },



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router