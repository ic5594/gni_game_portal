import { createRouter, createWebHistory } from 'vue-router'
import Top10 from '../views/top10/Top10.vue'
import Game from '../views/game/Game.vue'
import Kids from '../views/kids/Kids.vue'
import Event from '../views/event/Event.vue'
import Notice from '../views/notice/Notice.vue'
import Service from '../views/service/Service.vue'
import Mypage from '../views/mypage/Mypage.vue'
import Community from '../views/community/Community.vue'
import Footer from '../components/footer/Footer.vue'

const routes = [{
        path: '/',
        name: 'Footer',
        component: Footer
    },
    {
        path: '/top10',
        name: 'Top10',
        component: Top10
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
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