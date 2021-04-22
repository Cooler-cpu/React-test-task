const Router = require('express')

const router = new Router()


const dataTableController = require('../controllers/dataTableController')

router.post('/add', dataTableController.add)
router.get('/get', dataTableController.get)


module.exports = router