import React, { useState } from 'react';
import { antdValidate } from '../../utils/index'
import { Row, Col, Card, Form, Input, Button, Tooltip, Cascader, Select, Checkbox, AutoComplete } from 'antd'
import { QuestionCircleOutlined } from "@ant-design/icons"
const FormItem = Form.Item;
const Option = Select.Option;


interface IBasicFormProps { }

interface IBasicFormState { }


function BasicForms() {
    // !只有函数组件可以使用
    // !可以轻松获取到form.getFieldValue()等
    const [form] = Form.useForm()

    // class BasicForms extends React.Component<IBasicFormProps, IBasicFormState> {
    // 提示
    const [autoCompleteResult, setAutoCompleteResult]: [any, any] = useState([]);
    const onWebsiteChange = (value: any) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            // @ts-ignore
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website: any) => ({
        label: website,
        value: website,
    }));

    // 布局
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 14,
                offset: 8,
            },
        },
    };

    // Cascader 级连
    const residences = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    // 表单提交成功失败
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // !单独获取form
    const sendCode = () => {
        form.validateFields(['phone']);
        console.log('发送短信', form.getFieldValue('phone'))
    }

    // 选择器
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Row>
            <Col md={12}>
                <div>
                    <Card title={"注册表单"} bordered={false}>
                        <Form
                            form={form}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            colon={false}
                            layout="horizontal"
                            size='middle'
                            validateMessages={antdValidate}
                            scrollToFirstError
                            {...formItemLayout}
                        >
                            <FormItem
                                label="邮箱"
                                name="email"
                                rules={
                                    [{ required: true, type: 'email' }]
                                }
                            >
                                <Input
                                    placeholder="xx@gmail.com"
                                />
                            </FormItem>
                            <FormItem
                                label="密码"
                                name="password"
                                rules={
                                    [{ required: true }]
                                }
                            >
                                <Input.Password
                                />
                            </FormItem>
                            <FormItem
                                label="确认密码"
                                name="confirm"
                                rules={[
                                    { required: true },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve()
                                            }
                                            return Promise.reject('密码不一致')
                                        }
                                    })
                                ]}
                            >
                                <Input.Password
                                />
                            </FormItem>
                            <FormItem
                                label={

                                    <Tooltip title="昵称说明">
                                        <span>昵称 <QuestionCircleOutlined /> </span>
                                    </Tooltip>
                                }
                                name="nick"
                                rules={
                                    [{ required: true, type: 'email' }]
                                }
                            >
                                <Input
                                />
                            </FormItem>

                            <FormItem
                                label="地址"
                                name="address"
                                rules={[
                                    { required: true, type: 'array' }
                                ]}
                            >
                                <Cascader options={residences} />
                            </FormItem>

                            <FormItem
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}

                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </FormItem>


                            <FormItem

                                name="website"
                                label="Website"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input website!',
                                    },
                                ]}
                            >
                                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                                    <Input />
                                </AutoComplete>
                            </FormItem>

                            <FormItem
                                label="验证码"
                                extra="我们必须确认你不是机器人."
                            >
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Input size="large" />
                                    </Col>
                                    <Col span={12}>
                                        <Button size="large" onClick={sendCode}>获取验证码</Button>
                                    </Col>
                                </Row>
                            </FormItem>


                            <FormItem
                                {...tailFormItemLayout}
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                    },
                                ]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </FormItem>


                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" size="large">
                                    注册
                                </Button>
                            </FormItem>

                        </Form>

                    </Card>
                </div>
            </Col >
        </Row >
    );

}

export default BasicForms;