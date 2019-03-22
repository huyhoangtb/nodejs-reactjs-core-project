import ResponseData from "./ResponseData";

class Result extends ResponseData{

    public setSuccess(): Result {
        this.success = true;
        return this;
    }

    public setFailure(): Result {
        this.success = false;
        return this;
    }

    public setResult(result: any): Result {
        this._result = result;
        return this;
    }

    public setDetail(detail: any): Result {
        this.detail = detail;
        return this;
    }

    public setMessage(message: string): Result {
        this.message = message;
        return this;
    }
    public setTrace(trace: any): Result {
        this.trace = trace;
        return this;
    }

    public setSystemErrorMsg(): Result {
        this.setMessage("The system busy now, please wait a minute!...");
        return this;
    }

    public setError(error: { code: string; desc: string }): Result {
        this.error = error;
        return this;
    }

    public isSuccess() {
        return this.success;
    }

    public isResultOfRequest() {
        return true;
    }
}

export const Success = new Result().setSuccess();
export const Failure = new Result().setFailure();
export const FailureWithException  = ((error: any) => new Result().setFailure().setMessage(error.message).setTrace(error.stack));
export default Result;
