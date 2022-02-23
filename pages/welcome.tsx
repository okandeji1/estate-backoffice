import { Layout, Menu, Breadcrumb } from "antd";
import DefaultLayout from '../container/layouts/default.layout';

const { Header, Content, Footer } = Layout;

const Welcome = () => {
  return (
    <div>
      Home
    </div>
  );
};

Welcome.Layout = DefaultLayout;

export default Welcome;
