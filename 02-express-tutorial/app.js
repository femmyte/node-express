/*
const http = require('http')
// const { hostname } = require('os')
const { readFileSync } = require('fs')
const home = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const logic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(home)
    res.end()
  } else if (url === '/contact') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(`<h1> Contact Page </h1>`)
    res.end()
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyle)
    res.end()
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeLogo)
    res.end()
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(logic)
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write(`<h1>Page not found </h1>`)
    res.end()
  }
})

server.listen(5000)
*/

/*
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send(`<h1> Home Page </h1>`)
})
app.get('/contact', (req, res) => {
  res.status(200).send(`<h1> Contact Page </h1>`)
})
app.all('*', (req, res) => {
  res.status(400).send(`<h1> Unable to handle your request </h1>`)
})
app.listen(5000, () => {
  console.log('resource served')
})
*/

/*
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
  res.status(404).send(`<h1> path not recognized </h1>`)
})

app.listen(5000, () => {
  console.log('listening in port 5000...')
})
*/
/*
// working on api
const express = require('express')
const app = express()
const { products } = require('./data')

const logger = require('./logger')
// add the middleware function to all the url
app.use(logger)

// =======  getting all data at once ====
app.get('/', (req, res) => {
  res.json(products)
})

// ====== getting data wwithout description =====
app.get('/api/product', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProduct)
})

// ====== getting a specific item =====
// getting it like this will take our time we can use the sond method
/*
app.get('/api/product/1', (req, res) => {
  const singleProduct = products.find((product) => product.id === 1)
  res.json(singleProduct)
})
*/
/*
// ====== getting a specific item (METHOD 2) =====
app.get('/api/product/:productId', (req, res) => {
  const { productId } = req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  )

  if (!singleProduct) {
    return res.status(404).send('<h1>product not found </h1>')
  }
  return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
  let newProduct = [...products]
  const { search, limit } = req.query
  if (search) {
    newProduct = newProduct.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    newProduct = newProduct.slice(0, Number(limit))
  }
  if (newProduct.length < 1) {
    // res.status(200).send('search does not match any product')
    return res.status(200).json({ success: true, data: [] })
  }
  return res.json(newProduct)
})

app.listen(5000, () => {
  console.log('listening on port 5000....')
})
*/

/*
// ======= working on post method

const { urlencoded } = require('express')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
const site = app.use(express.static('./methods-public'))
app.get('/', (req, res) => {
  res.status(200).send(site)
})
app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    res.status(200).send(`Welcome ${name}`)
  } else {
    res.status(401).send('kindly provide your credentials')
  }
})
app.listen(5000, () => {
  console.log('app is listerning from port 5000')
})
*/

const express = require('express')
const app = express()
const people = require('./route/people')
const auth = require('./route/auth')
app.use(express.static('./methods-public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('listening from port 5000')
})
