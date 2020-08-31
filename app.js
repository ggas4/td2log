const expr = require('express')
//const mysql = require('mysql')
const appl = expr()
const path = require('path')

appl.use('/', expr.static(path.join(__dirname, 'public')))

appl.get('/test', function (req, res, next) {
    res.sendFile(path.join(`${__dirname}/index.htm`))
})

appl.listen('80')