import React from 'react'
import { Table, Input, Button } from 'antd'
import { ColumnProps } from 'antd/es/table';


interface Props {

}

const getColumnSearchProps = (dataIndex: any) => {
    return {

    }
}

interface IUser {
    id: number;
    name: string;
    join: string;
    from: string;
    money: number;
    time: string;
    shopName: string;
}

const columns: ColumnProps<IUser>[] = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        // width: '30%',
    },
    {
        title: '客户姓名',
        dataIndex: 'name',
        key: 'name',
        // width: '30%',
        ...(getColumnSearchProps('name')),
    },
    {
        title: '参与活动',
        dataIndex: 'join',
        key: 'join',
        width: '20%',
        ...(getColumnSearchProps('join')),
    },
    {
        title: '渠道',
        dataIndex: 'from',
        key: 'from',
        ...(getColumnSearchProps('from')),
    },
    {
        title: '消费金额',
        dataIndex: 'money',
        key: 'money',
        ...(getColumnSearchProps('money')),
    },
    {
        title: '消费时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '店铺',
        dataIndex: 'shopName',
        key: 'shopName',
        ...(getColumnSearchProps('shopName')),
    },
];


const data: Array<IUser> = [
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },
    {
        "id": 1,
        "name": "11",
        "join": "砍价",
        "from": "线上",
        "money": 100,
        "time": "2020-04-17 00:00",
        "shopName": "浦东大酒店"
    },

]


const List = (props: Props) => {
    const config = {
        bordered: false,
        loading: false,
        // pagination,
        // size: 'default',
        // expandable,
        title: undefined,
        // showHeader,
        // footer,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
    };
    return (
        <Table
            {...config}
            // title={() => 'Here is title'}
            // showHeader={true}
            // rowKey="uid"
            columns={columns}
            dataSource={data}
        >

        </Table>
    )
}

export default List
