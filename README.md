# cookie-object

Use cookies to transmit Javascript objects. 

### example
```
var cookieObject = require('cookie-object')

// within the server/routes handler, providing a request object
// given a cookie having a serialzed value, such as: mycookie={"one":1,"two":2}; path=/;

console.log( getCookieObject(req.headers.cookie, 'mycookie') )
// {one:1, two:2}

console.log( getCookieObject(req.headers.cookie, 'mycookie').two )
// 2
```
