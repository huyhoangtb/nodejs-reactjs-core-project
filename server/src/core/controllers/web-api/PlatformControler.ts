'use strict';

import {Get, JsonController} from "routing-controllers";
import {Inject} from "typedi";
import {FailureWithException, Success} from "../../responseable/Result";
import {Oauth2Repository} from "../../repositories/Oauth2Repository";

@JsonController('/platform')
export default class TestController {

    @Inject('oauth2Repository')
    oauth2Repository: Oauth2Repository;

    @Get("/init")
    async initDefaultPlatform() {
        try {
            const r = await this.oauth2Repository.initMainApp();
            return Success.setResult(r);
        } catch (err) {
            return FailureWithException(err)
        }
    }
}
