export default class ResponseData {
    protected _success: boolean;
    protected _result: object;
    protected _message: string;
    protected _detail: object;
    protected _trace: any;
    protected _error: {
        code: string,
        desc: string
    };

    constructor(data?: any) {
        if(!data) {
            return;
        }
        this._success = data.success;
        this._result = data.result;
        this._message = data.message;
        this._error = data.error;
        this._detail = data.detail;
    }

    set success(value: boolean) {
        this._success = value;
    }
    set trace(value: any) {
        this._trace = value;
    }

    set result(value: object) {
        this._result = value;
    }

    set message(value: string) {
        this._message = value;
    }

    set detail(value: object) {
        this._detail = value;
    }

    set error(value: { code: string; desc: string }) {
        this._error = value;
    }

    get trace(): any {
       return this._trace;
    }
    get success(): boolean {
        return this._success;
    }

    get result(): object {
        return this._result;
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
