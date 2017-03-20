import moment from 'moment'

export const countdown = (expireTime, date) => {
  var now = moment().unix()
  let calTime = () => {
    if (++now > expireTime) {
      return
    }
    var delta = parseInt(expireTime - now, 10)
    var days = parseInt(delta / 86400)
    delta -= days * 86400
    var hours = full(parseInt(delta / 3600))
    delta -= hours * 3600
    var minutes = full(parseInt(delta / 60))
    var seconds = full(delta - minutes * 60)
    date.day = days
    date.hour = hours
    date.minute = minutes
    date.second = seconds
  }
  return calTime
}

let full = (t) => {
  if (t < 10) {
    t = '0' + t
  }
  return t
}

