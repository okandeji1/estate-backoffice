import { useState, useEffect } from "react";
import axios from "axios";
import {
  Drawer,
  Typography,
  Form,
  Button,
  Select,
  Upload,
  Switch,
} from "antd";
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
import { UploadOutlined } from "@ant-design/icons";

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
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input a title!" }]}>
          <AppInput placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          rules={[{ required: true, message: "Please input description!" }]}>
          <AppInput placeholder="description" type="text" />
        </Form.Item>
        <Form.Item
          name="address"
          label="address"
          rules={[{ required: true, message: "Please input address!" }]}>
          <AppInput placeholder="address" type="text" />
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
            name="city"
            label="City"
            rules={[{ required: true, message: "Please select your city!" }]}
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
              placeholder="Select City"
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
        <Form.Item
          name="price"
          label="Property Price"
          rules={[{ required: true, message: "Please input property price!" }]}>
          <AppInput placeholder="Property Price" type="number" />
        </Form.Item>
        <Form.Item
          name="user_id"
          label="User"
          rules={[{ required: true, message: "Please select a user!" }]}>
          <AppSelect
            suffixIcon={<CrateIcon />}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            // onSearch={searchUser}
            placeholder="Select user">
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
          name="property_category_id"
          label="Property Category"
          rules={[
            { required: true, message: "Please select a property category!" },
          ]}>
          <AppSelect
            suffixIcon={<CrateIcon />}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            placeholder="Select Category">
            {users.data?.length > 0
              ? users.data.map((user, index) => {
                  return (
                    <Option key={index} value={user.user_id}>
                      {`${user.firstName} ${user.lastName}`}
                    </Option>
                  );
                })
              : null}
          </AppSelect>
        </Form.Item>
        <Form.Item
          name="property_type_id"
          className="form-item"
          style={{ margin: "auto" }}>
          <AppSelect
            suffixIcon={<CrateIcon />}
            placeholder="Property Type"
            allowClear>
            {users.data?.length > 0
              ? users.data.map((user, index) => {
                  return (
                    <Option key={index} value={user.user_id}>
                      {`${user.firstName} ${user.lastName}`}
                    </Option>
                  );
                })
              : null}
          </AppSelect>
        </Form.Item>
        <Form.Item style={{ margin: "auto" }} className="form-item">
        <Form.Item
          name="image"
          label="Property Image"
          rules={[{ required: true, message: "Image is required!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 0.5rem)",
          }}
          >
          <Upload {...props}>
            <Button icon={<UploadOutlined />} className="block w-full h-12 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white h-14 upload-button">Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="is_featured"
          label="Featured"
          style={{
            display: "inline-block",
            width: "calc(50% - 0.5rem)",
          }}
          >
            <Switch />
          </Form.Item>
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
