

/** 
 * 本段重点
 * 1. Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
 *      1. 通俗说就是防止，子组件【列表中有div】在父组件中无法展示，
 *      2. 简单写法 <> <ChildA> </>
*/
import React, { Fragment } from 'react'

import { Row, Col, Select, Radio, DatePicker } from 'antd'

const { OptGroup, Option } = Select;
const RangePicker = DatePicker.RangePicker;

interface Props {

}



const Top = (props: Props) => {


    const onChangeSelect = (value: any) => {
        console.log('选择器--', value);
    }

    const onChangeRadio = (e: any) => {
        console.log('单选--', e.target.value);
    }

    // 日期选择器

    const onChangeDate = (value: any, dateString: any) => {
        console.log('日期选择', value, dateString)
    }

    const onOkDate = (value: any) => {
        console.log('日期选择 ok --', value)
    }


    return (
        <Fragment>
            <Row gutter={[10, 10]}>
                <Col span={4} >
                    <Select defaultValue={"key1"} style={{ minWidth: 50 }}
                        placeholder='请选择门店'
                        onChange={onChangeSelect}
                    >
                        <OptGroup label='分组一'>
                            <Option value='key1'>全部</Option>
                            <Option value='key2'>部分</Option>
                        </OptGroup>
                        <OptGroup label='分组二'>
                            <Option value='key3' disabled={true}>全部</Option>
                            <Option value='key4' disabled={true}>部分</Option>
                        </OptGroup>
                    </Select>
                </Col>


                <Col span={16} offset={4}>
                    <Radio.Group onChange={onChangeRadio} defaultValue={"A"}>
                        <Radio.Button key='key1' value='A' >最近七天</Radio.Button>
                        <Radio.Button key='key2' value='B'>最近一个月</Radio.Button>
                        <Radio.Button key='key3' value='C'>最近三个月</Radio.Button>
                    </Radio.Group>


                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onChange={onChangeDate}
                        onOk={onOkDate}
                    />

                </Col>
            </Row>

        </Fragment >
    )
}

export default Top
