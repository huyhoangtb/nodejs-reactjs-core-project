export default class Exception extends Error {

    protected _success: boolean = false;
    protected _message: string;
    protected _detail: object;
    protected _error: {
        code: string,
        desc: string
    };


    set message(value: string) {
        this._message = value;
    }

    set detail(value: object) {
        this._detail = value;
    }

    set error(value: { code: string; desc: string }) {
        this._error = value;
    }

    get success(): boolean {
        return this._success;
    }

    get message(): string {
        return this._message;
    }

    get detail(): object {
        return this._detail;
    }

    get error(): { code: string; desc: string } {
        return this._error;
    }

}
