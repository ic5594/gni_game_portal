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
import Game1 from '../views/game/Game1.vue'
import Game2 from '../views/game/Game2.vue'
import Game3 from '../views/game/Game3.vue'
import Game4 from '../views/game/Game4.vue'
import Game5 from '../views/game/Game5.vue'
import Game6 from '../views/game/Game6.vue'
import Game7 from '../views/game/Game7.vue'
import Game8 from '../views/game/Game8.vue'
import Game9 from '../views/game/Game9.vue'
import Game10 from '../views/game/Game10.vue'
import Dropanime from '../views/anime/Dropdownanime.vue'
import Dropanime1 from '../views/anime/Dropdownanime1.vue'
import Dropanime2 from '../views/anime/Dropdownanime2.vue'
import Dropanime3 from '../views/anime/Dropdownanime3.vue'
import Dropanime4 from '../views/anime/Dropdownanime4.vue'
import Kids from '../views/kids/Kids.vue'
import Kids1 from '../views/kids/Kids1.vue'
import Kids2 from '../views/kids/Kids2.vue'
import Kids3 from '../views/kids/Kids3.vue'
import Kids4 from '../views/kids/Kids4.vue'
import Event from '../views/event/Event.vue'
import Notice from '../views/notice/Notice.vue'
import Service from '../views/service/Service.vue'
import Service1 from '../views/service/Service1.vue'
import Service2 from '../views/service/Service2.vue'
import Service3 from '../views/service/Service3.vue'
import Service4 from '../views/service/Service4.vue'
import Service5 from '../views/service/Service5.vue'
import Service6 from '../views/service/Service6.vue'
import Mypage from '../views/mypage/Mypage.vue'
import Mypage1 from '../views/mypage/Mypage1.vue'
import Mypage2 from '../views/mypage/Mypage2.vue'
import Mypage3 from '../views/mypage/Mypage3.vue'
import Mypage4 from '../views/mypage/Mypage4.vue'
import Mypage5 from '../views/mypage/Mypage5.vue'
import Community from '../views/community/Community.vue'
import Community1 from '../views/community/Community1.vue'
import Community2 from '../views/community/Community2.vue'
import Community3 from '../views/community/Community3.vue'

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
        path: '/game1',
        name: 'Game1',
        component: Game1
    },
    {
        path: '/game2',
        name: 'Game2',
        component: Game2
    },
    {
        path: '/game3',
        name: 'Game3',
        component: Game3
    },
    {
        path: '/game4',
        name: 'Game4',
        component: Game4
    },
    {
        path: '/game5',
        name: 'Game5',
        component: Game5
    },
    {
        path: '/game6',
        name: 'Game6',
        component: Game6
    },
    {
        path: '/game7',
        name: 'Game7',
        component: Game7
    },
    {
        path: '/game8',
        name: 'Game8',
        component: Game8
    },
    {
        path: '/game9',
        name: 'Game9',
        component: Game9
    },
    {
        path: '/game10',
        name: 'Game10',
        component: Game10
    },
    {
        path: '/dropanime',
        name: 'Dropanime',
        component: Dropanime
    },
    {
        path: '/dropanime1',
        name: 'Dropanime1',
        component: Dropanime1
    },
    {
        path: '/dropanime2',
        name: 'Dropanime2',
        component: Dropanime2
    },
    {
        path: '/dropanime3',
        name: 'Dropanime3',
        component: Dropanime3
    },
    {
        path: '/dropanime4',
        name: 'Dropanime4',
        component: Dropanime4
    },
    {
        path: '/kids',
        name: 'Kids',
        component: Kids
    },
    {
        path: '/kids1',
        name: 'Kids1',
        component: Kids1
    },
    {
        path: '/kids2',
        name: 'Kids2',
        component: Kids2
    },
    {
        path: '/kids3',
        name: 'Kids3',
        component: Kids3
    },
    {
        path: '/kids4',
        name: 'Kids4',
        component: Kids4
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
        path: '/service1',
        name: 'Service1',
        component: Service1
    },
    {
        path: '/service2',
        name: 'Service2',
        component: Service2
    },
    {
        path: '/service3',
        name: 'Service3',
        component: Service3
    },
    {
        path: '/service4',
        name: 'Service4',
        component: Service4
    },
    {
        path: '/service5',
        name: 'Service5',
        component: Service5
    },
    {
        path: '/service6',
        name: 'Service6',
        component: Service6
    },
    {
        path: '/mypage',
        name: 'Mypage',
        component: Mypage
    },
    {
        path: '/mypage1',
        name: 'Mypage1',
        component: Mypage1
    },
    {
        path: '/mypage2',
        name: 'Mypage2',
        component: Mypage2
    },
    {
        path: '/mypage3',
        name: 'Mypage3',
        component: Mypage3
    },
    {
        path: '/mypage4',
        name: 'Mypage4',
        component: Mypage4
    },
    {
        path: '/mypage5',
        name: 'Mypage5',
        component: Mypage5
    },
    {
        path: '/community',
        name: 'Community',
        component: Community
    },
    {
        path: '/community1',
        name: 'Community1',
        component: Community1
    },
    {
        path: '/community2',
        name: 'Community2',
        component: Community2
    },
    {
        path: '/community3',
        name: 'Community3',
        component: Community3
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router