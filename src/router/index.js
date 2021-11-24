import { createRouter, createWebHistory } from 'vue-router'
import Top10 from '../views/top10/Top10.vue'
import Top101 from '../views/top10/Top101.vue'
import Top102 from '../views/top10/Top102.vue'
import Top103 from '../views/top10/Top103.vue'
import Top104 from '../views/top10/Top104.vue'
import Top105 from '../views/top10/Top105.vue'
import Top106 from '../views/top10/Top106.vue'
import Top107 from '../views/top10/Top107.vue'
import Top108 from '../views/top10/Top108.vue'
import Top109 from '../views/top10/Top109.vue'
import Top1010 from '../views/top10/Top1010.vue'
import Game from '../views/game/Game.vue'
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
        path: '/top101',
        name: 'Top101',
        component: Top101
    },
    {
        path: '/top102',
        name: 'Top102',
        component: Top102
    },
    {
        path: '/top103',
        name: 'Top103',
        component: Top103
    },
    {
        path: '/top104',
        name: 'Top104',
        component: Top104
    },
    {
        path: '/top105',
        name: 'Top105',
        component: Top105
    },
    {
        path: '/top106',
        name: 'Top106',
        component: Top106
    },
    {
        path: '/top107',
        name: 'Top107',
        component: Top107
    },
    {
        path: '/top108',
        name: 'Top108',
        component: Top108
    },
    {
        path: '/top109',
        name: 'Top109',
        component: Top109
    },
    {
        path: '/top1010',
        name: 'Top1010',
        component: Top1010
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    },
    {
        path: '/dropdownanime',
        name: Dropanime,
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
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router