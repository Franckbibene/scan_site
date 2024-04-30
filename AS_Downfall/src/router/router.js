import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import HomeFeed from '../views/HomeFeed.vue'
import VideoDetails from '../views/VideoDetails.vue'
import MangaPage from '../views/MangaPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomeFeed',
        component: HomeFeed
    },
    {
        path: '/video/:id',
        name: 'Video',
        component: VideoDetails
    },
    {
        path: '/manga/:id',
        name: 'Manga',
        component: MangaPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router