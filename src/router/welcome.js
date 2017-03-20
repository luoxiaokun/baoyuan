import welcome from 'components/welcome/welcome'
import recommend from 'components/welcome/recommend/recommend'
import search from 'components/welcome/search/search'
export default {
  path: '/welcome',
  name: 'welcome',
  component: welcome,
  children: [
    {
      path: 'recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: 'search',
      name: 'search_product',
      component: search
    }
  ]
}
