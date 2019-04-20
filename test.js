const express = require('express')
const now = require('performance-now')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  let start = now()
  setTimeout(function() {
    let end = now()
    console.log(start-end)
  }, 2000)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
