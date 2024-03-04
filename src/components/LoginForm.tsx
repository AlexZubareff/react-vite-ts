import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { fetchAuth } from "../store/authSlice";
import { useAuth } from "../hooks/authHook";
import { useAppDispatch } from "../store/hooks";

type FieldType = {
  username?: string;
  password?: string;
  //   remember?: string;
};

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
   
    // console.log("Success:", values);

    const data = await dispatch(fetchAuth(values));
    // console.log("data:", data);

    if (!data.payload) {
      return alert("Не удалось авторизоваться");
    }

    if (data.payload.token) {
      // console.log(data.payload.token);

      localStorage.setItem("token", data.payload.token);
      navigate("/boards");
    }
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        initialValue={"hbingley1"}
        // initialValue={'atuny0'}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        // initialValue={'9uQFF1Lh'}
        initialValue={"CQutx25i8r"}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}
