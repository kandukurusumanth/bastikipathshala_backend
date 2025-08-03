class crudrepository{
    constructor(model){
        this.model = model
    }
    async create(data){
        console.log(data,this.model , "this is to create")
        try {
            const response = 
            await this.model.create(data)
            return response
        } catch (error) {
            throw error
        }
    }
    async getAll(query={}){
        try {
            const response = await this.model.find(query)
            return response
        } catch (error) {
            throw error
        }
    }
    async getById(id){
        try {
            const respone = await this.model.findById(id)
            return respone
        } catch (error) {
            throw error
        }
    }
}
module.exports=crudrepository