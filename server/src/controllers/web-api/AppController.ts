'use strict';

import Status from "../../configs/Status";
import {Get, JsonController} from "routing-controllers";
import {Success} from "../../core/responseable/Result";

@JsonController('/context')
class AppController {

    @Get("/app")
    getContext() {
        const result = {
            transactionStatuses: Status.TRANSACTION_STATUS,
            senderTransactionStatuses: Status.TRANSACTION_SENDER_STATUS,
            receiverTransactionStatuses: Status.TRANSACTION_RECEIVER_STATUS,
            orderStatuses: Status.ORDER_STATUS,
        }
        return Success.setSuccess().setResult(result);
    }

}
