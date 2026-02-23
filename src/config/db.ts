import mongoose from 'mongoose';

const connectDB= async ()=>{
    try{
        const mongoURI= process.env.MONGO_URI|| "";
        if(!mongoURI){
            console.log("Erro na string do MongoBD");
            process.exit(1);
        }
        await mongoose.connect(mongoURI)
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;