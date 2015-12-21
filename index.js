exports.getCookieObject = function (cookie, name) {
  cookie = 'string' === typeof cookie? cookie: ''
  var ret
  cookie.split('; ').forEach(function (item) {
    var cookiepair = item.split(/=(.+)?/)
    if ( name === cookiepair[0] ) { ret = JSON.parse(cookiepair[1]) }
  })
  return ret || {}
}

