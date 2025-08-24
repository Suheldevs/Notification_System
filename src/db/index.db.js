import mongoose from 'mongoose'

const DBConnection = async()=>{
try{
    await mongoose.connect(process.env.DB_URL)
    console.log("DB Connected Successfully")
}
catch(err){
    console.log(err)
    process.exit(1)
}
}



export default DBConnection