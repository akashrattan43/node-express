const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host)
//Hostname (doe not give port)
console.log(myUrl.hostname)
//pathName
console.log(myUrl.pathname)