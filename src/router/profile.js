import profile from 'components/user/profile'
import fav from 'components/user/fav/fav'
export const userProfileRouter = {
  path: '/profile',
  name: 'profile',
  component: profile
}

export const userFavRouter = {
  path: '/user_favs',
  name: 'user_fav',
  component: fav
}

