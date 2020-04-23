/** 
 * !本页面完成✅
 * 1. card->form->input->checkbox->button->span的基本使用以及各个组件的触发时间
 * !2. 函数组件，路由跳转
 *      路由跳转的几种方式：
 *          1. 路由组件：只有包裹在Route组件里的才能使用`this.props.location`
 *          2. 非路由组件： useHistory 、 withRouter
 *          https://www.cnblogs.com/jianxian/p/12585340.html
 *          
 * 
*/

import React from 'react'
import { Form, Input, Button, Card, Checkbox } from 'antd'
import { UserOutlined, LoadingOutlined } from '@ant-design/icons'
import { antdValidate } from '../../utils/index'
import { useHistory } from 'react-router-dom'

const FormItem = Form.Item;
function Login() {


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

    const [form] = Form.useForm();

    // !表单提交成功失败
    const history = useHistory();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        history.push("/404");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const changeBox = (e: any) => {
        console.log('checked = ', e.target.checked);
    }

    return (
        <div>
            <Card
                title="登录"
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'
                    {...formItemLayout}
                    validateMessages={antdValidate}
                >
                    <FormItem
                        name='userName'
                        rules={[
                            { required: true, type: 'string' }
                        ]}>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="用户名"
                        />
                    </FormItem>

                    <FormItem
                        name='password'
                        rules={[
                            { required: true, type: 'string' }
                        ]}>
                        <Input.Password
                            prefix={<LoadingOutlined />}
                            placeholder="密码"
                        />
                    </FormItem>

                    <FormItem>
                        <Checkbox
                            defaultChecked={true}
                            onChange={changeBox}
                        >
                            记住我
                        </Checkbox>
                        <span
                            style={{ float: "right" }}
                            onClick={() => { console.log('点击忘记密码') }}
                        >
                            忘记密码
                        </span>
                        <Button
                            type='primary'
                            htmlType="submit"
                            style={{ width: '100%' }}
                        >
                            登录
                        </Button>
                        或 <span
                            onClick={() => {
                                console.log('点击：去注册')
                            }}
                        >现在就去注册!</span>
                    </FormItem>
                </Form>
            </Card>
        </div >
    )
}

export default Login