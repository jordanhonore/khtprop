import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'

const DEFAULT_TITLE = 'Key To Home Property Management'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Key To Home Property Management | Houston & Sugar Land TX Property Managers',
      description: 'Professional property management services in Houston and Sugar Land, TX. We handle everything so you can enjoy stress-free property ownership.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'Our Services | Key To Home Property Management Houston TX',
      description: 'Comprehensive property management services including tenant screening, rent collection, maintenance coordination, and more in Houston and Sugar Land, TX.'
    }
  },
  {
    path: '/get-started',
    name: 'get-started',
    component: () => import('@/views/GetStartedView.vue'),
    meta: {
      title: 'Get Started | Key To Home Property Management Houston TX',
      description: 'Start your stress-free property ownership journey. Competitive 8-10% management fees, no setup fees, and easy electronic onboarding.'
    }
  },
  {
    path: '/why-hire-us',
    name: 'why-hire-us',
    component: () => import('@/views/WhyHireUsView.vue'),
    meta: {
      title: 'Why Hire a Property Manager | Key To Home Property Management',
      description: 'Discover the benefits of professional property management: increased ROI, time savings, quality tenants, legal compliance, and professional tenant relations.'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FAQView.vue'),
    meta: {
      title: 'FAQ | Key To Home Property Management Houston TX',
      description: 'Frequently asked questions about property management for owners and tenants. Learn about our services, fees, tenant screening, and more.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/InformationView.vue'),
    meta: {
      title: 'About Us | Key To Home Property Management Houston TX',
      description: 'Learn about Key To Home Property Management. Over 20 years of combined experience in Houston residential and commercial property management.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact Us | Key To Home Property Management Houston TX',
      description: 'Contact Key To Home Property Management. Two locations in Sugar Land and Houston. Call (281) 241-6902 or email office@kthpropertymanagement.com.'
    }
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: () => import('@/views/AnnouncementsView.vue'),
    meta: {
      title: 'Announcements | Key To Home Property Management',
      description: 'Latest news and announcements from Key To Home Property Management.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Offset for fixed navbar
      }
    }
    return { top: 0 }
  }
})

// Update document title and meta description on route change
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta && to.meta.description) {
    descriptionMeta.setAttribute('content', to.meta.description)
  }

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogTitle && to.meta.title) {
    ogTitle.setAttribute('content', to.meta.title)
  }
  if (ogDescription && to.meta.description) {
    ogDescription.setAttribute('content', to.meta.description)
  }
})

export default router