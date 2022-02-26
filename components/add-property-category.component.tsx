import { useState, useEffect } from "react";
import axios from "axios";
import { Drawer, Typography, Form, Button, Select, DatePicker } from "antd";
import { CrateIcon } from "../public/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowAddPropertyCategory,
  setShowAddPropertyCategory,
} from "../store/slices/app-settings.slice";
import { selectUser, selectUsers, getUsers } from "../store/slices/user.slice";
import { setLoading, selectLoading } from "../store/slices/loading.slice";

// import {capitalize} from "../util/utility";
import statesLGA from "../util/state-lga.json";
import AppSelect from "./app-select.component";
import AppPassword from "./app-password.component";
import AppInput from "./app-input.component";

const { Option } = Select;

const AddPropertyCategory = (props: any) => {
  // const { callback } = props;
  const showAddPropertyCategory = useSelector(selectShowAddPropertyCategory);
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
      visible={showAddPropertyCategory}
      onClose={() => dispatch(setShowAddPropertyCategory(false))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}>
      <div style={{ padding: "10px 0" }}>
        <Typography.Title style={{ fontSize: 20, textAlign: "center" }}>
          ADD PROPERTY CATEGORY
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{ marginTop: 20 }}
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="property_category"
          label="Property Category"
          rules={[{ required: true, message: "Please input property category!" }]}>
          <AppInput placeholder="Property Category" type="text" />
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={loading}
            disabled={loading}>
            Add Property Category
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddPropertyCategory;
