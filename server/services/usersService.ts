import { UserRepo } from "../models/UserModel";
import { User } from "../types/User";

const usersRepo = new UserRepo();

const getAllUsers = () => {
    return usersRepo.getAll();
};

const getSingleUser = (userId: number) => {
    const user = usersRepo.getSingle(userId);
    return user;
};

const createUser = (user: User) => {
    const newUser = usersRepo.createUser(user);
    return newUser;
};

const updateUser = (index: number, user: User) => {
    const updatedUser = usersRepo.updateUser(index, user)
    return updatedUser
};

const deleteUser = (index: number) => {
    usersRepo.deleteUser(index)
    return
};

export default {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
};