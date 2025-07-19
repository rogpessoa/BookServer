import mongoose from "mongoose";



async function pool(){
    mongoose.connect(process.env.db_connect)
    return mongoose.connection

};

export default pool
    
