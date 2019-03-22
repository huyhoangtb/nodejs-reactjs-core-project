import IUser from "../../model/interfaces/mongo/IUser";
import Status from "../../configs/Status";

export default class UserRepository {

    /**
     *
     * @param {IUser} user
     * @returns {Promise<"mongoose".Document>}
     */
    public async createUser(user: IUser) {
        user.status = Status.INACTIVE;
        user.enable2FaStatus = Status.INACTIVE;
        // const password = await hashPassword(user.password);
        // if (password === undefined) {
        //     throw new ValidationException('The password you enter was wrong!!..');
        // }
        // user.password = password;
        // User.findById()
        return await user.save();
    }

}

Object.seal(UserRepository);
