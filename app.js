const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Gitops!'))
app.listen(3000, () => console.log('Server ready'))