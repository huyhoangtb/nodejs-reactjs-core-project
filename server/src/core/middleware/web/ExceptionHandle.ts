import {ExpressErrorMiddlewareInterface, Middleware} from "routing-controllers";

@Middleware({type: 'after'})
export class ExceptionHandle implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next: (err?: any) => Promise<any>) {
        next();
    }

}
