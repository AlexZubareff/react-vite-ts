import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
// import { fetchAddUser } from '../store/userSlice';
import { useAuth } from '../hooks/authHook';
import { auth, fetchAuth, fetchRegister } from '../store/authSlice';
import { useEffect } from 'react';



type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  email?: string;
};

export default function RegistrationForm():JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isAuth, data} = useAuth();

  console.log(isAuth);
  console.log(data);


  const onFinish = async(values: any) => {
   
    
    dispatch(fetchRegister(values));

    if (data) {
      // localStorage.setItem("token", data.payload.token);
      navigate("/login");
      
    }

// const authData = {
//   username: values.username,
//   password: values.password,
// }
//     dispatch(auth(true));


    // const data = await dispatch(fetchAuth(authData));
    // console.log("data:", data);
//     console.log(isAuth);
//     console.log("registrationData:", values);

//     // console.log("Success:", values);

//     console.log("data:", data);

    
  };

  // if (isAuth) {
  //   // localStorage.setItem("token", data.payload.token);
  //   navigate("/boards");
    
  // }



// useEffect(()=>{
//   if (data) {
//     // localStorage.setItem("token", data.payload.token);
//     navigate("/login");
    
//   }
// },[data])



  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };





  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      initialValue={'hbingley1'}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
          label="Email"
          name="email"
          initialValue={'hbingley1@plala.or.jp'}
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      initialValue={'CQutx25i8r'}
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Зарегистрироваться
      </Button>
    </Form.Item>
  </Form>
  )

};

