import { Layout } from "antd";
import Navbar from "./partials/navbar.container";
import Footer from "./partials/footer.container";

const { Content } = Layout;

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-secondary">
      <div className="">
        <Navbar />
      {/* <Footer /> */}
        <Content >{children}</Content>
      </div>
    </div>
  );
};

export default DefaultLayout;
