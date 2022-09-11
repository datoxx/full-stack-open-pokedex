/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/num', (_, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
