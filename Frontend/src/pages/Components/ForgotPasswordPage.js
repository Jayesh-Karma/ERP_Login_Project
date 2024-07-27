import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <div>
      <div className="py-5" style={{ background: '#FFFFF0', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="my-5 w-25 rounded-3 mx-auto p-4 border"
        style={{ background: 'white' }}
      >
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center"></div>
        <Form
          action="/dashboard"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
        
            <label >Email</label>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined />} style={{ width: '150%' }} />
          </Form.Item>
        
          
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" style={{ width: '150%' }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default ForgotPasswordPage
