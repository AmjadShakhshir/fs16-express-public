import { UserRepo } from "../models/UserModel";
import { User, UserUpdate } from "../types/User";

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

const updateUser = (index: number, updatedUser: UserUpdate) => {
    const existingEmail = usersRepo.getAll().find(user => user.email === updatedUser.body?.email);
    if (existingEmail) {
        return null;
    } 
    const updatedData = usersRepo.updateUser(index, updatedUser)
    return updatedData;
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