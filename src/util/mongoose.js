module.exports = { 
    mutipleMongooseToObject: (Array)=>{
        return Array.map((arr)=> arr.toObject())
    },
    mongooseToObject: (Array)=>{
        return Array ?  Array.toObject() : Array
    }
    
}