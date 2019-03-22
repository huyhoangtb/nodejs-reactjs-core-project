'use strict';
import UserRepository from "../../core/repositories/UserRepository";
import IUser from "../../model/interfaces/mongo/IUser";
import {isEmail} from "../../common/validate";
import Roles from "../../configs/Roles";
import Result, {Failure, Success} from "../../core/responseable/Result";

class UserController {

    registerAction(request: any, response: any) {
        let userData = request.body || {};
        let user = <IUser> userData;
        user.roles = [Roles.ROLE_USER];
        const isValidUser = this.validateUser(user);
        if (!isValidUser.isSuccess()) {
            return isValidUser;
        }
        const userRepository = new UserRepository();
        return userRepository.createUser(user);

    }

    public validateUser(user: IUser): Result {

        const isValideEmail = isEmail(user.email, this);
        if (!user.recaptcha) {
            return Failure.setMessage('Recaptcha is not valid!');
        } else if (!isValideEmail.isSuccess()) {
            return isValideEmail;
        }
        if (!user.password || user.password.length < 8) {
            return Failure.setMessage('Password must be more than 8 character!');
        }
        if (!user.repassword || user.repassword.length < 8) {
            return Failure.setMessage('Repassword must be more than 8 character!');
        }
        if (user.repassword !== user.password) {
            return Failure.setMessage('Password and repassword is not matched!');
        }

        return Success;

    }
}

export default UserController;
