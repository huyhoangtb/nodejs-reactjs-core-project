export default class Status {
    static ACTIVE = 1;
    static INACTIVE = -1;
    static INIT_STATUS = 0;

    static TRANSACTION_STATUS = {
        CANCEL: {
            value: 0,
            label: 'Hủy bỏ'
        },
        DONE: {
            value: 1,
            label: 'Thành công'
        },
        PROCESSING: {
            value: 2,
            label: 'Đang xử lý'
        },
        WITHDRAW_CONFIRMED: {
            value: 21,
            label: 'Đã xác nhận rút tiền'
        },
        LITIGIOUS: {
            value: 3,
            label: 'Tranh chấp'
        }
    }

    static TRANSACTION_SENDER_STATUS = {
        CANCEL: {
            value: 0,
            label: 'Hủy bỏ'
        },
        DONE: {
            value: 1,
            label: 'Đã chuyển'
        },
        PROCESSING: {
            value: 2,
            label: 'Đang chuyển'
        },
        LITIGIOUS: {
            value: 3,
            label: 'Tranh chấp'
        }
    }

    static TRANSACTION_RECEIVER_STATUS = {
        CANCEL: {
            value: 0,
            label: 'Hủy bỏ'
        },
        DONE: {
            value: 1,
            label: 'Xác nhận thành công'
        },
        PROCESSING: {
            value: 2,
            label: 'Chờ xác nhận'
        },
        LITIGIOUS: {
            value: 3,
            label: 'Tranh chấp'
        }
    }

    static ORDER_STATUS = {
        ACTIVE: {
            value: 1,
            label: 'Kích hoạt'
        },
        PAUSE: {
            value: 0,
            label: 'Tạm dừng'
        },
        CANCEL: {
            value: 0,
            label: 'Tạm dừng'
        }
    }

}
