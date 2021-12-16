const express = require('express')

const auth = express.Router()

auth.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    res.status(200).send(`welcome ${name}`)
  }
  res.status(401).send('please provide your credentials')
})

module.exports = auth
