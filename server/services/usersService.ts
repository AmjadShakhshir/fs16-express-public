import mongoose, { mongo } from "mongoose";
import UserRepo from "../models/UserModel";
import { User, UserUpdate } from "../types/User";

async function findAll() {
    const users = await UserRepo.find({}).exec();
    return users;
}

async function getSingleUser(index: string) {
    const id = new mongoose.Types.ObjectId(index);
    const user = await UserRepo.findById(id);
    return user;
}

async function createUser(user: User) {
    const newUser = new UserRepo(user);
    await newUser.save();
    return newUser;
}

async function updateUser(index: number, user: UserUpdate) {
    const updatedUser = await UserRepo.findOneAndUpdate(
        { id: index },
        user,
        { new: true }
    ).exec();
    return updatedUser;
}

async function deleteUser(index: number) {
    const deletedUser = await UserRepo.findOneAndDelete({ id: index }).exec();
    return deletedUser;
}

export default {
    findAll,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
};