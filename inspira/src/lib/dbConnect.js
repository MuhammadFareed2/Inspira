import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    let connection;
    if (connection?.connection?.readyState != 1) {
      connection = await mongoose.connect(process.env.MONGODB_URL);
      console.log("Database Connected Successfully");
    } else {
      console.log("Database Not Connected");
    }
  } catch (err) {
    console.log("err=>", err);
  }
}
