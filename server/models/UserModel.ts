import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    password: String,
    role: String,
});

export default mongoose.model("User", UserSchema);