import { useState, useEffect } from "react";
import axios from "axios";
import { Drawer, Typography, Form, Button, Select, DatePicker } from "antd";
import { CrateIcon } from "../public/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowAddPropertyType,
  setShowAddPropertyType,
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
  const showAddPropertyType = useSelector(selectShowAddPropertyType);
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const [form] = Form.useForm();
  const [state, setState] = useState({});

  const change = (values, allValues) => {
    if (values.state) {
      setState({ ...state });
    }
  };

  const submit = (payload: any) => {};

  return (
    <Drawer
      visible={showAddPropertyType}
      onClose={() => dispatch(setShowAddPropertyType(false))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}>
      <div style={{ padding: "10px 0" }}>
        <Typography.Title style={{ fontSize: 20, textAlign: "center" }}>
          ADD PROPERTY TYPE
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{ marginTop: 20 }}
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="property_type"
          label="Property Type"
          rules={[{ required: true, message: "Please input property type!" }]}>
          <AppInput placeholder="Property Type" type="text" />
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={loading}
            disabled={loading}>
            Add Property Type
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddProperty;
