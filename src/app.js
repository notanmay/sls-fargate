const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    return 'Hello, world! My function executed successfully from Dockerfile!'
})

app.listen(3000, () => {
    console.log("app listening on port 3000!");
  });