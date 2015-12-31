var cookieObject = require('../')
var test = require('tape')

test('cookie string to object', function (tt) {
    tt.plan(6)

    var cookiestring = 'mycookie={"one":1,"two":2,"three":3}; yourcookie=hey; nocookie=;'
    var resultmycookie = {one: 1, two: 2, three: 3}
    var resultall = {mycookie: {"one": 1, "two": 2, "three": 3}, yourcookie: 'hey', nocookie: undefined}
    var resultsub = {mycookie: {"one": 1, "two": 2, "three": 3}, yourcookie: 'hey'}

    tt.deepEqual(cookieObject.getCookieObject(cookiestring, 'mycookie'), resultmycookie)
    tt.deepEqual(cookieObject.getCookieObject(cookiestring), resultall)
    tt.deepEqual(cookieObject.getCookieObject(cookiestring, ['mycookie', 'yourcookie']), resultsub)
    tt.deepEqual(cookieObject.getCookieObject(''), undefined)
    tt.equal(cookieObject.getCookieObject(cookiestring, 'mycookie').two, 2)
    tt.equal(cookieObject.getCookieObject(cookiestring, 'yourcookie'), 'hey')
})

