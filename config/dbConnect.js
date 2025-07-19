import mongoose from "mongoose";



async function pool(){
    mongoose.connect("mongodb+srv://rogerio:admin12345@cluster0.zcqclnw.mongodb.net/Books?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection

};

export default pool
    
