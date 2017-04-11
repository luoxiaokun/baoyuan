let url = ''
if (process.env.NODE_ENV === 'development') {
  url = '/mobile/wx/'
} else {
  url = '/wx/'
}
export default url
