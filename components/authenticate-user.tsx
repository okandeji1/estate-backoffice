import React, {useState, useMemo, useEffect} from "react";
import axios from "axios";
import {Drawer, Typography, Form, Button, Select, DatePicker} from "antd";
import {
  selectUser,
  registerUser,
  selectUsers,
  getUsers,
} from "../store/slices/user.slice";
import {useSelector, useDispatch} from "react-redux";
import {selectShowUser, setShowUser, setShowAuthenticateUser, selectShowAuthenticateUser} from "../store/slices/app-settings.slice";
import {CrateIcon} from "../public/icons";
// import {capitalize} from "../util/utility";
import statesLGA from "../util/state-lga.json";
import AppSelect from "./app-select.component";
import AppPassword from "./app-password.component";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import AppInput from "./app-input.component";
import {setLoading, selectLoading} from "../store/slices/loading.slice";
import {searchUserApi} from "../util/api";

const {Option} = Select;

const AuthenticateUser = (props) => {
    const {action} = props;
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
  const showUser = useSelector(selectShowUser);
  const showAuthUser = useSelector(selectShowAuthenticateUser);
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const userData = useSelector(selectUser);
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const [parents, setParents] = useState([]);
  const [form] = Form.useForm();
  const [state, setState] = useState({});

  const submit = async (data) => {
    dispatch(setLoading(true));
    // @ts-ignore
    await dispatch(registerUser({data, callbacks: [callback]}));
    // dispatch(setShowUser({role: userData.data.role, show: false}));

    dispatch(setLoading(false));
  };

  const change = (values, allValues) => {
    if (values.state) {
      form.setFieldsValue({
        state: values.state,
        lga: undefined,
      });

      // HACK: to update state and lga
      setState({...state});
    }
  };

  const searchUser = async (username) => {
    if (!username || username.length < 3) {
      setParents(null);
      return;
    }
    try {
      // @ts-ignore
      const responseData = await searchUserApi(username);
      setParents(responseData.data);
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(getUsers({query: {role: "super-agent"}}));
  }, []);
  // This is addOn for selecting phone code

  return (
    <Drawer
      visible={showAuthUser.visible}
      onClose={() => dispatch(setShowAuthenticateUser({visible:false}))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}
    >
      <div style={{padding: "10px 0"}}>
        <Typography.Title style={{fontSize: 20, textAlign: "center"}}>
          LOGIN
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{marginTop: 20}}
        initialValues={{
          phone: {code: "+234"},
          gender: "male",
          role: "agent",
        }}
        onFinish={submit}
        onValuesChange={change}
      >
          <Form.Item
          name="email"
          label="Email"
          rules={[{required: true, message: "Please input email!"}]}
        >
          <AppInput placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{required: true, message: "Please input password!"}]}
        >
          <AppPassword placeholder="Change Password" />
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={loading}
            disabled={loading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

const RegisterUser = () => {
    const showUser = useSelector(selectShowUser);
    const showAuthUser = useSelector(selectShowAuthenticateUser);
    const dispatch = useDispatch();
    const screens = useBreakpoint();
    const userData = useSelector(selectUser);
    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);
    const [parents, setParents] = useState([]);
    const [form] = Form.useForm();
    const [state, setState] = useState({});
  
    const submit = async (data) => {
      dispatch(setLoading(true));
      // @ts-ignore
      await dispatch(registerUser({data, callbacks: [callback]}));
      // dispatch(setShowUser({role: userData.data.role, show: false}));
  
      dispatch(setLoading(false));
    };
  
    const change = (values, allValues) => {
      if (values.state) {
        form.setFieldsValue({
          state: values.state,
          lga: undefined,
        });
  
        // HACK: to update state and lga
        setState({...state});
      }
    };
  
    const searchUser = async (username) => {
      if (!username || username.length < 3) {
        setParents(null);
        return;
      }
      try {
        // @ts-ignore
        const responseData = await searchUserApi(username);
        setParents(responseData.data);
      } catch (error) {}
    };
  
    useEffect(() => {
      dispatch(getUsers({query: {role: "super-agent"}}));
    }, []);
    // This is addOn for selecting phone code
  
    return (
      <Drawer
        visible={showAuthUser.visible}
        onClose={() => dispatch(setShowAuthenticateUser({visible: false}))}
        placement="right"
        closable={true}
        destroyOnClose={true}
        width={screens.lg ? "450px" : "100%"}
      >
        <div style={{padding: "10px 0"}}>
          <Typography.Title style={{fontSize: 20, textAlign: "center"}}>
            CREATE AN ACCOUNT
          </Typography.Title>
        </div>
  
        <Form
          layout="vertical"
          form={form}
          style={{marginTop: 20}}
          initialValues={{
            phone: {code: "+234"},
            gender: "male",
            role: "agent",
          }}
          onFinish={submit}
          onValuesChange={change}
        >
          <Form.Item
            name="role"
            label="Role"
            rules={[{required: true, message: "Please select a role!"}]}
          >
            <AppSelect
              suffixIcon={<CrateIcon />}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Select role"
              disabled
            >
              <Option value="area-manager">Area Manager</Option>
              <Option value="super-agent">Super Agent</Option>
              <Option value="agent">Agent</Option>
              <Option value="cashier">Cashier</Option>
              <Option value="online-customer">Online Customer</Option>
            </AppSelect>
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{required: true, message: "Please input a username!"}]}
          >
            <AppInput placeholder="Username" />
          </Form.Item>
          
  
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{required: true, message: "Please input first name!"}]}
          >
            <AppInput placeholder="First Name" type="text" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{required: true, message: "Please input last name!"}]}
          >
            <AppInput placeholder="Last Name" type="text" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{required: true, message: "Please input password!"}]}
          >
            <AppPassword placeholder="Change Password" />
          </Form.Item>
  
          {/* <Form.Item className="form-item" style={{margin: "auto"}}>
            <Form.Item
              className="form-item"
              name="state"
              label="State"
              rules={[{required: true, message: "Please select your state!"}]}
              style={{
                display: "inline-block",
                width: "calc(50% - 0.5rem)",
                marginRight: "1rem",
              }}
              // shouldUpdate
            >
              <AppSelect
                suffixIcon={<CrateIcon />}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                placeholder="Select state"
              >
                {statesLGA.map((item, index) => {
                  return (
                    <Option key={index} value={item.state.name}>
                      {item.state.name}
                    </Option>
                  );
                })}
              </AppSelect>
            </Form.Item>
  
            <Form.Item
              className="form-item"
              name="lga"
              label="Local Govt Area"
              rules={[{required: true, message: "Please select your lga!"}]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
            >
              <AppSelect
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                placeholder="Select LGA"
                disabled={!form.getFieldValue("state")}
              >
                {statesLGA
                  .find((item) => item.state.name === form.getFieldValue("state"))
                  ?.state.locals.map((lga, index) => {
                    return (
                      <Option key={index} value={lga.name}>
                        {lga.name}
                      </Option>
                    );
                  })}
              </AppSelect>
            </Form.Item>
          </Form.Item> */}
  
          <Form.Item name="phone" style={{margin: "auto"}}>
            <Form.Item
              name={["phone", "code"]}
              style={{
                display: "inline-block",
                width: "6rem",
              }}
            >
              <AppSelect>
                <Option value="+234">+234</Option>
              </AppSelect>
            </Form.Item>
  
            <Form.Item
              name={["phone", "number"]}
              style={{display: "inline-block", width: "calc(100% - 6rem)"}}
            >
              <AppInput placeholder="Phone Number" type="number" />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{required: true, message: "Please input email!"}]}
          >
            <AppInput placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item>
            <Button
              key="submit"
              block={true}
              htmlType="submit"
              className="w-full h-12 my-2 btn-secondary"
              loading={loading}
              disabled={loading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    );
  };
export default AuthenticateUser;
