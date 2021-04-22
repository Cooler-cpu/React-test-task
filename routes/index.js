const Router = require('express')
const router = new Router()

//import routes
const dataTableRouter = require('./dataTableRouter')

router.use('/dataTable', dataTableRouter)

module.exports = router