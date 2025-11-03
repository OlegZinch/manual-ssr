const { createServer } = require('http')
const { parse } = require('url')

const server = createServer((req, res) => {
  const { pathname } = parse(req.url, true)
  if (pathname === '/') {
    res.end('Hello World!')
  } else if (pathname === '/test') {
    res.end('TEST!')
  } else {
    res.end('The URL can not be found')
  }
})

server.listen(8000, () => {
  console.log('Listening for requests on port 8000')
})
