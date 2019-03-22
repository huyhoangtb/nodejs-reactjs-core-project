import Entity from "./Entity";
import IUser from "./ientities/IUser";

export default class User extends Entity {
    private user: IUser;

    constructor(user: IUser) {
        super(user);
        this.user = user;
    }

    set avatar(value: string) {
        this.user.avatar = value;
    }

    set phone(value: string) {
        this.user.phone = value;
    }

    set address(value: string) {
        this.user.address = value;
    }

    get avatar(): string {
        return this.user.avatar;
    }

    get phone(): string {
        return this.user.phone;
    }

    get address(): string {
        return this.user.address;
    }
}
