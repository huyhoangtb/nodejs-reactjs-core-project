import {IsEmail, IsNotEmpty} from "class-validator";
import IClient from "./ientities/IClient";

export default class Client {

    private _clientEntity: IClient;

    @IsNotEmpty()
    set clientId(value: string) {
        this._clientEntity.clientId = value;
    }

    @IsNotEmpty()
    @IsEmail()
    set clientSecret(value: string) {
        this._clientEntity.clientSecret = value;
    }

    @IsNotEmpty()
    set domains(value: [string]) {
        this._clientEntity.domains = value;
    }

    get clientId(): string {
        return this._clientEntity.clientId;
    }

    get clientSecret(): string {
        return this._clientEntity.clientSecret;
    }

    get domains(): [string] {
        return this._clientEntity.domains;
    }
}
