import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ajiteshsinha2004_db_user:SINHA1014@drximposter.ravfmoa.mongodb.net/Tasks?retryWrites=true&w=majority");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;