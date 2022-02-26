import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import {
  Drawer,
  Typography,
  Form,
  Button,
  Select,
  DatePicker,
  Divider,
} from "antd";
import {
  selectUser,
  registerUser,
  selectUsers,
  login,
} from "../store/slices/user.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowUser,
  setShowUser,
  setShowAuthenticateUser,
  selectShowAuthenticateUser,
} from "../store/slices/app-settings.slice";
import { CrateIcon } from "../public/icons";
import statesLGA from "../util/state-lga.json";
import AppSelect from "./app-select.component";
import AppPassword from "./app-password.component";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import AppInput from "./app-input.component";
import { setLoading, selectLoading } from "../store/slices/loading.slice";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import {openNotification} from "./notify";

const { Option } = Select;

const AuthenticateUser = (props) => {
  const { action } = props;
  let render;
  if (!action) {
    render = null;
  }

  if (action === "LOGIN") {
    render = <LoginUser />;
  }

  if (action === "REGISTER") {
    render = <RegisterUser />;
  }
  return render;
};

const LoginUser = (action) => {
  const showAuthUser = useSelector(selectShowAuthenticateUser);
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const userData = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const [form] = Form.useForm();
  const [state, setState] = useState({});

  const submit = async (data) => {
    dispatch(setLoading(true));
    // @ts-ignore
    await dispatch(login({
      body: data
    }));
    dispatch(setLoading(false));
    dispatch(setShowAuthenticateUser({ visible: false }))
  };

  const change = (values, allValues) => {
    if (values.state) {
      setState({ ...state });
    }
  };

  return (
    <Drawer
      visible={showAuthUser.visible}
      onClose={() => dispatch(setShowAuthenticateUser({ visible: false }))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}>
      <div style={{ padding: "10px 0" }}>
        <Typography.Title style={{ fontSize: 20, textAlign: "center" }}>
          LOGIN
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{ marginTop: 20 }}
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input email!" }]}>
          <AppInput placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input password!" }]}>
          <AppPassword placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={userData.loading === "LOADING"}
                  disabled={userData.loading === "LOADING"}
            >
            Login
          </Button>
        </Form.Item>
      </Form>
      <Divider>Or</Divider>
      <Button
        key="submit"
        block={true}
        htmlType="submit"
        className="w-full h-12 rounded-lg"
        loading={userData.loading === "LOADING"}
        disabled={userData.loading === "LOADING"}
        // icon={<FacebookOutlined />}
      >
        Continue with Google
      </Button>
      <Button
        key="submit"
        block={true}
        htmlType="submit"
        className="w-full h-12 my-2 rounded-lg"
        loading={loading}
        disabled={loading}
        // icon={<GoogleOutlined />}
      >
        Continue with Facebook
      </Button>
    </Drawer>
  );
};

const RegisterUser = () => {
  const showAuthUser = useSelector(selectShowAuthenticateUser);
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const userData = useSelector(selectUser);
  const [roles, setRoles] = useState([]);
  const [form] = Form.useForm();
  const [state, setState] = useState({});

  const submit = async (data) => {
    if (data.password !== data.password_confirmation) {
      openNotification({
        type: "error",
        message: "Error",
        description: `Password does not match`,
      });
      return;
    }
    dispatch(setLoading(true));
    // @ts-ignore
    await dispatch(registerUser({ body: data }));
    dispatch(setLoading(false));
    dispatch(setShowAuthenticateUser({ visible: false }))
  };

  const change = (values) => {
    if (values.state) {
      setState({ ...state });
    }
  };

  const getRoles = async () => {
    try {
      const { data: responseData } = await axios({
        url: `/api/v1/users/get-roles`,
        method: "GET",
      });
      if(responseData.success){
        setRoles(responseData.data)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getRoles();
  }, [])

  return (
    <Drawer
      visible={showAuthUser.visible}
      onClose={() => dispatch(setShowAuthenticateUser({ visible: false }))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}>
      <div style={{ padding: "10px 0" }}>
        <Typography.Title style={{ fontSize: 20, textAlign: "center" }}>
          CREATE AN ACCOUNT
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{ marginTop: 20 }}
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Please input first name!" }]}>
          <AppInput placeholder="First Name" type="text" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Please input last name!" }]}>
          <AppInput placeholder="Last Name" type="text" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input email!" }]}>
          <AppInput placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input password!" }]}>
          <AppPassword placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="password_confirmation"
          label="Confirm Password"
          rules={[{ required: true, message: "Please confirm password!" }]}>
          <AppPassword placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item name="phoneNumber" style={{ margin: "auto" }}>
          <AppInput placeholder="Phone Number" type="number" />
        </Form.Item>
        <Form.Item
          name="user_type"
          label="Role"
          rules={[{ required: true, message: "Please select a role!" }]}>
          <AppSelect
            suffixIcon={<CrateIcon />}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            placeholder="Select role"
            >
            {roles.map((user, index) => {
                  return (
                    <Option key={index} value={user.user_type}>
                      {user.user_type}
                    </Option>
                  );
                })}
          </AppSelect>
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={userData.loading === "LOADING"}
                  disabled={userData.loading === "LOADING"}
            >
            Register
          </Button>
        </Form.Item>
      </Form>
      {userData?.data?.user?.role !== 'admin' && (
        <>
        <Divider>Or</Divider>
        <Button
          key="submit"
          block={true}
          htmlType="submit"
          className="w-full h-12 rounded-lg"
          loading={userData?.loading === "LOADING"}
                    disabled={userData?.loading === "LOADING"}
          // icon={<FacebookOutlined />}
        >
          Continue with Google
        </Button>
        <Button
          key="submit"
          block={true}
          htmlType="submit"
          className="w-full h-12 my-2 rounded-lg"
          loading={userData?.loading === "LOADING"}
                    disabled={userData?.loading === "LOADING"}
          // icon={<GoogleOutlined />}
        >
          Continue with Facebook
        </Button>
        </>
      )}
    </Drawer>
  );
};
export default AuthenticateUser;
