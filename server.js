const express = require('express');
const logger = require('morgan');
const path = require('path');
const notesRouter = require('./routes/notes');
const port = process.env.PORT || 3000;

express()
.set('view engine', 'ejs')
.set('views', path.join(__dirname, 'views'))
.use(express.static(path.join(__dirname, 'public')))
.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({extended: false}))
.use('/', notesRouter)
.listen(port, () => console.log(`Listening on ${port}`))

