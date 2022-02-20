import { Layout } from "antd";
import Head from "next/head";
import Script from "next/script";
import Header from "../../container/layouts/partials/header.container";
import Footer from "../../container/layouts/partials/header.container";

const { Content } = Layout;

const SiteLayout = (props: any) => {
  const { children } = props;

  return (
    <div className="mainWrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Real estate" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Header />
      <Content className="bg-tertiary">{children}</Content>
      <Footer />
    </div>
  );
};

export default SiteLayout;
