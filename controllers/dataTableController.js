const {DataTable} = require('../models/models')

class dataTableController {
    async add(req, res, next){
        const { date, name, quantity, distance } = req.body
        
        if(!date || !name || !quantity || !distance){
            res.json("data invalid", 500)
        }
        
        try{
        const dataTable = await DataTable.create({ date, name, quantity,  distance})
        }catch(e){
            console.log("dataTable add error", e)
        }

        return res.json(201)
    }

    async get(req, res, next){

        const dataAll = await DataTable.findAll()
        if(!dataAll.length){
            return res.json("data empty", 500)
        }
        
        return res.json(dataAll);
    }
}   
module.exports = new dataTableController()