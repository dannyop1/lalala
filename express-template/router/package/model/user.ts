import { Schema, model } from "mongoose";

export const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    name: {
      type: String,
      require: true,
    },
    YOB: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const userModel = model("user", userSchema);

export interface User {
  _id: any;
  username: string;
  password: string;
  name: string;
  YOB: number;
  isAdmin: boolean;
}
