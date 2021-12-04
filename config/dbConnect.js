import mongoose from 'mongoose';



const dbConnect = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {

    useNewUrlParser: true, 

    useUnifiedTopology: true 

    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
}

export default dbConnect