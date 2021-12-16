let logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  const ip = req.ip
  console.log(method, url, time, ip)
  // always involke next() function
  next()
}

module.exports = logger
