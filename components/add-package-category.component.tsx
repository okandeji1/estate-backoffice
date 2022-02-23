import { useState, useEffect } from "react";
import axios from "axios";
import { Drawer, Typography, Form, Button } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowAddPackageCategory,
  setShowAddPackageCategory,
} from "../store/slices/app-settings.slice";
import { setLoading, selectLoading } from "../store/slices/loading.slice";
import AppInput from "./app-input.component";

const AddPackage = (props: any) => {
  const { callback } = props;
  const showAddPackageCategory = useSelector(selectShowAddPackageCategory);
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
      visible={showAddPackageCategory}
      onClose={() => dispatch(setShowAddPackageCategory(false))}
      placement="right"
      closable={true}
      destroyOnClose={true}
      width={screens.lg ? "450px" : "100%"}>
      <div style={{ padding: "10px 0" }}>
        <Typography.Title style={{ fontSize: 20, textAlign: "center" }}>
          ADD PACKAGE CATEGORY
        </Typography.Title>
      </div>

      <Form
        layout="vertical"
        form={form}
        style={{ marginTop: 20 }}
        onFinish={submit}
        onValuesChange={change}>
        <Form.Item
          name="package_category"
          label="Package Category"
          rules={[{ required: true, message: "Please input package category!" }]}>
          <AppInput placeholder="Package Category" type="text" />
        </Form.Item>
        <Form.Item>
          <Button
            key="submit"
            block={true}
            htmlType="submit"
            className="w-full h-12 my-2 btn-secondary"
            loading={loading}
            disabled={loading}>
            Add Package Category
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddPackage;
