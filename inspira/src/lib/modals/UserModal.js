import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullname: { type: String },
    email: { type: String, required: true },
    provider: { type: String },
    profileImg: { type: String },
    password: { type: String },
    role: { type: String, default: "user" },
    gender: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

export const UserModal = mongoose.model.users || mongoose.model('users', userSchema);
