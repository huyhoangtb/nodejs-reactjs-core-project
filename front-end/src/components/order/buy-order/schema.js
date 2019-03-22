import {AutoComplete, InputNumber} from 'antd';
import {Select} from "antd/lib/index";
import ElementTypes from "schema-form/ElementTypes";

export const layout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 24},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 24},
  },
};

export default ($this => {
  return [
    {
      label: 'Số lượng mua',
      name: 'currencyTotal',
      colSpan: 24,
      component: InputNumber,
      decoratorOption: {
        initialValue: 0.1,
        rules: [{required: true, message: 'Số lượng mua là bắt buộc!'}]
      },
      componentProps: {
        placeholder: 'Nhập số lượng muốn mua',
        style: {width: '100%'},
        formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        parser: value => value.replace(/\$\s?|(,*)/g, '')
      }
    },
    {
      label: 'Số lượng tối thiểu',
      name: 'minTotal',
      colSpan: 24,
      component: InputNumber,
      decoratorOption: {
        initialValue: 0.1,
        rules: [{required: true, message: 'Số lượng tối thiểu là bắt buộc!'}]
      },
      componentProps: {
        placeholder: 'Nhập số lượng tối thiểu',
        style: {width: '100%'},
        formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        parser: value => value.replace(/\$\s?|(,*)/g, '')
      }
    },
    {
      label: 'Giá mua',
      name: 'price',
      colSpan: 24,
      component: InputNumber,
      decoratorOption: {
        initialValue: $this.props.defaultPrice ? parseInt($this.props.defaultPrice) : 0,
        rules: [{required: true, message: 'Giá mua là bắt buộc!'}]
      },
      componentProps: {
        placeholder: 'Nhập giá mua',
        style: {width: '100%'},
        formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        parser: value => value.replace(/\$\s?|(,*)/g, '')
      }
    },
    {
      label: 'Địa chỉ ví',
      name: 'currencyAddress',
      colSpan: 24,
      component: AutoComplete,
      decoratorOption: {
        rules: [{required: true, message: 'Địa chỉ ví là bắt buộc!'}]
      },
      componentProps: {
        placeholder: 'Nhập địa chỉ ví',
        style: {width: '100%'},
        dataSource: $this.props.wallet ? [$this.props.wallet.address] : []
      }
    },
    {
      label: 'Thanh toán qua',
      name: 'bankName',
      colSpan: 24,
      component: Select,
      type: ElementTypes.SELECTION,
      componentProps: {
        showSearch: true,
        style: {width: 200},
        placeholder: 'Chọn ngân hàng',
        optionFilterProp: 'children',
      },
      options: {
        value: 'bankName',
        label: 'bankName',
        data: $this.props.bankings
      }
    },
  ];
});
