let url = ''
if (process.env.NODE_ENV === 'development') {
  url = '/mobile/wx'
} else {
  url = '/mobile/weixin/restaurants/'
}
export default url
