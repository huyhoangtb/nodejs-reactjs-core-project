import IEntity from "./base/IEntity";
import IAccount from "./IAccount";

export default interface IUser extends IEntity {
    avatar: string,
    phone: string,
    address: string,
    account: IAccount;
}
