import { useState, useEffect } from "react";
import axios from "axios";
import { Drawer, Typography, Form, Button, Select, DatePicker } from "antd";
import { CrateIcon } from "../public/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowAddProperty,
  setShowAddProperty,
} from "../store/slices/app-settings.slice";
import { selectUser, selectUsers, getUsers } from "../store/slices/user.slice";
import { setLoading, selectLoading } from "../store/slices/loading.slice";

// import {capitalize} from "../util/utility";
import statesLGA from "../util/state-lga.json";
import AppSelect from "./app-select.component";
import AppPassword from "./app-password.component";
import AppInput from "./app-input.component";

const { Option } = Select;

const AddProperty = (props: any) => {
  const { callback, role } = props;
  const showAddProperty = useSelector(selectShowAddProperty);
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  const [form] = Form.useForm();
  const [state, setState] = useState({});

  const change = (values, allValues) => {
    if (values.state) {
      form.setFieldsValue({
        state: values.state,
        lga: undefined,
      });

      // HACK: to update state and lga
      setState({ ...state });
    }
  };

  const submit = (payload: any) => {};

  useEffect(() => {
    dispatch(getUsers({ query: { role: role } }));
  }, []);

  return (
    <Drawer
      visible={showAddProperty}
      onClose={() => dispatch(setShowAddProperty(false))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}>
      <div style={{ padding: "10px 0" }}>
        <Typography.Title style={{ fontSize: 20, textAlign: "center" }}>
          ADD PROPERTIES
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{ marginTop: 20 }}
        initialValues={{
          phone: { code: "+234" },
          gender: "male",
          role: "agent",
        }}
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="role"
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
            disabled>
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
          rules={[{ required: true, message: "Please input a username!" }]}>
          <AppInput placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="parent"
          label="Parent"
          rules={[{ required: true, message: "Please select a parent!" }]}>
          <AppSelect
            suffixIcon={<CrateIcon />}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            // onSearch={searchUser}
            placeholder="Select parent">
            {/* Login user is an admin */}
            {userData?.data?.user?.role === "admin" ? (
              users.data?.length > 0 ? (
                users.data.map((user, index) => {
                  return (
                    <Option key={index} value={user.user_id}>
                      {`${user.firstName} ${user.lastName}`}
                    </Option>
                  );
                })
              ) : null
            ) : (
                // Not admin
              <Option value={userData?.data?.user?.user_id}>
                {`${userData?.data?.user?.firstName} ${userData?.data?.user?.lastName}`}
              </Option>
            )}
          </AppSelect>
        </Form.Item>

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
          name="commission"
          className="form-item"
          style={{ margin: "auto" }}>
          <Form.Item
            name={["commission", "plan"]}
            label="Commission Plan"
            style={{
              display: "inline-block",
              width: "calc(70% - 0.5rem)",
              marginRight: "1rem",
            }}>
            <AppSelect
              suffixIcon={<CrateIcon />}
              placeholder="Commission Plan"
              allowClear>
              <Option value="SALES">Sales</Option>
              {/* <Option value="inherit">Inherit</Option>
              <Option value="upfront-profit-share">Upfront Profit Share</Option>
              <Option value="weekly-profit-share">Weekly Profit Share</Option>
              <Option value="commission-on-sales">Commision On Sale</Option>
              <Option value="inline-commission">Inline Commission</Option> */}
            </AppSelect>
          </Form.Item>
          <Form.Item
            name={["commission", "percentage"]}
            label="Percentage"
            style={{
              display: "inline-block",
              width: "calc(30% - 0.5rem)",
            }}>
            <AppInput placeholder="Percentage" type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input password!" }]}>
          <AppPassword placeholder="Change Password" />
        </Form.Item>

        <Form.Item className="form-item" style={{ margin: "auto" }}>
          <Form.Item
            className="form-item"
            name="state"
            label="State"
            rules={[{ required: true, message: "Please select your state!" }]}
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
              placeholder="Select state">
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
            rules={[{ required: true, message: "Please select your lga!" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}>
            <AppSelect
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Select LGA"
              disabled={!form.getFieldValue("state")}>
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
        </Form.Item>

        <Form.Item name="phone" style={{ margin: "auto" }}>
          <Form.Item
            name={["phone", "code"]}
            style={{
              display: "inline-block",
              width: "6rem",
            }}>
            <AppSelect>
              <Option value="+234">+234</Option>
            </AppSelect>
          </Form.Item>

          <Form.Item
            name={["phone", "number"]}
            style={{ display: "inline-block", width: "calc(100% - 6rem)" }}>
            <AppInput placeholder="Phone Number" type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input email!" }]}>
          <AppInput placeholder="Email" type="email" />
        </Form.Item>

        <Form.Item className="form-item" style={{ margin: "auto" }}>
          <Form.Item
            name="gender"
            label="Gender"
            style={{
              display: "inline-block",
              width: "calc(50% - 0.5rem)",
              marginRight: "1rem",
            }}>
            <AppSelect suffixIcon={<CrateIcon />}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </AppSelect>
          </Form.Item>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true, message: "Date of Birth is required" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 0.5rem)",
            }}>
            <DatePicker
              disabledDate={(d) =>
                !d || d.isAfter("2002-12-31") || d.isSameOrBefore("1960-01-01")
              }
              className="block w-full h-12 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:bg-white "
            />
          </Form.Item>
        </Form.Item>
        <Form.Item name="address" label="Address">
          <AppInput
            // style={classes.formItem}
            placeholder="Address"
            type="text"
          />
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={loading}
            disabled={loading}>
            Add Property
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddProperty;
