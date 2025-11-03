const { readFileSync } = require('fs')
const { createServer } = require('http')
const { parse } = require('url')

const htmlTemplate = readFileSync(`${__dirname}/index.html`, 'utf-8')

const server = createServer((req, res) => {
  const { pathname } = parse(req.url, true)
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(htmlTemplate)
  } else if (pathname === '/test') {
    res.end('TEST!')
  } else {
    res.end('The URL can not be found')
  }
})

server.listen(8000, () => {
  console.log('Listening for requests on port 8000')
})
