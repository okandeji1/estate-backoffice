import { Layout, BackTop } from "antd";
import Navbar from "./partials/navbar.container";
import Footer from "./partials/footer.container";
import { ArrowUpOutlined } from "@ant-design/icons";

const { Content } = Layout;

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <Layout className="min-h-screen">
      <div className="bg-lightPrimary w-full">
        <Navbar/>
      </div>
        <Content className="min-h-3/4 border-none">{children}
        <BackTop>
        <ArrowUpOutlined className="text-4xl text-primary" />
    </BackTop>
        </Content>
        
        <div className="bg-lightPrimary">
        <Footer />
        </div>
    </Layout>
  );
};

export default DefaultLayout;
