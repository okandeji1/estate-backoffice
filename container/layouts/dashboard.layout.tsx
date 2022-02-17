import React, {useState, useEffect} from "react";
import { Layout, Menu } from 'antd';
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BankOutlined,
  SettingOutlined,
  StockOutlined,
  LogoutOutlined,
  ApartmentOutlined,
  TeamOutlined,
  ShoppingOutlined,
  SoundOutlined,
  HomeOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import Link from "next/link";
import Image from 'next/image'
import {useRouter, Router} from "next/router";
import {useSelector, useDispatch} from "react-redux";
import {IOption} from '../../types/types';
import styled from "@emotion/styled";

const { Header, Sider, Content } = Layout;

const AppMenu = () => {
  const router = useRouter();
  // const userData = useSelector(selectUser);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const Router = useRouter();

  const handleClick = (href: any) => {
    router.push(href);
  };

  const menus = [
    {
      role: "admin",
      routes: [
        {
          title: "Home",
          icon: <HomeOutlined />,
          link: "/real-estate/overview",
        },
        {
          title: "Users",
          icon: <TeamOutlined />,
          subMenu: [
            {
              title: "Agents List",
              link: "/real-estate/users/agents",
            },
            {
              title: "Developers List",
              link: "/real-estate/users/developers",
            },
            {
              title: "Landlord List",
              link: "/real-estate/users/landlord",
            },
            {
              title: "Artisans List",
              link: "/real-estate/users/artisans",
            },
          ],
        },
        {
          title: "Real Estate",
          icon: <ApartmentOutlined />,
          subMenu: [
            {
              title: "Property",
              link: "/real-estate/property/properties",
            },

            {
              title: "Property Feature",
              link: "/real-estate/property/property-features",
            },

            {
              title: "Property Categories",
              link: "/real-estate/property/property-categories",
            },
            {
              title: "Property Type",
              link: "/real-estate/property/property-types",
            },
          ],
        },
        {
          title: "Product",
          icon: <ShoppingOutlined />,
          subMenu: [
            {
              title: "Package Lists",
              link: "/real-estate/package/packages",
            },
            {
              title: "Package Category",
              link: "/real-estate/package/package-categories",
            },
          ],
        },
        {
          title: "Reports",
          icon: <BankOutlined />,
          subMenu: [
            {
              title: "Subscriptions",
              link: "/real-estate/reports/subscriptions",
            },
            {
              title: "Transactions",
              link: "/real-estate/reports/transactions",
            },
          ],
        },
        {
          title: "Blog",
          icon: <SoundOutlined />,
          subMenu: [
            {
              title: "Posts",
              link: "/real-estate/blog/post",
            },
            {
              title: "Post Category",
              link: "/real-estate/blog/post-categories",
            },
          ],
        },
        {
          title: "Mortgage",
          icon: <FundProjectionScreenOutlined />,
          subMenu: [
            {
              title: "Posts",
              link: "/real-estate/mortegage/collector",
            },
          ],
        },
        {
          title: "Settings",
          icon: <SettingOutlined />,
          subMenu: [
            {
              title: "Profile",
              link: "/real-estate/settings/profile"
            },
            {
              title: "Change Password",
              },
            {
              title: "Configuration",
              link: "/users/settings/configuration",
            },
          ],
        },
        {
          title: "Logout",
          icon: <LogoutOutlined />,
        },
      ],
    },
    {
      role: "agent",
      routes: [
        {
          title: "Home",
          icon: <HomeOutlined />,
          link: "/real-estate/overview",
        },
        {
          title: "Real Estate",
          icon: <ApartmentOutlined />,
          subMenu: [
            {
              title: "Property",
              link: "/real-estate/property/properties",
            },

            {
              title: "Property Feature",
              link: "/real-estate/property/property-features",
            },

            {
              title: "Property Categories",
              link: "/real-estate/property/property-categories",
            },
            {
              title: "Property Type",
              link: "/real-estate/property/property-types",
            },
          ],
        },
        {
          title: "Product",
          icon: <ShoppingOutlined />,
          subMenu: [
            {
              title: "Package Lists",
              link: "/real-estate/package/packages",
            },
          ],
        },
        {
          title: "Reports",
          icon: <BankOutlined />,
          subMenu: [
            {
              title: "Subscriptions",
              link: "/real-estate/reports/subscriptions",
            },
            {
              title: "Transactions",
              link: "/real-estate/reports/transactions",
            },
          ],
        },
        {
          title: "Settings",
          icon: <SettingOutlined />,
          subMenu: [
            {
              title: "Profile",
              link: "/real-estate/settings/profile"
            },
            {
              title: "Change Password",
              },
          ],
        },
        {
          title: "Logout",
          icon: <LogoutOutlined />,
        },
      ],
    },
    {
      role: "developer",
      routes: [
        {
          title: "Home",
          icon: <HomeOutlined />,
          link: "/real-estate/overview",
        },
        {
          title: "Real Estate",
          icon: <ApartmentOutlined />,
          subMenu: [
            {
              title: "Property",
              link: "/real-estate/property/properties",
            },

            {
              title: "Property Feature",
              link: "/real-estate/property/property-features",
            },

            {
              title: "Property Categories",
              link: "/real-estate/property/property-categories",
            },
            {
              title: "Property Type",
              link: "/real-estate/property/property-types",
            },
          ],
        },
        {
          title: "Product",
          icon: <ShoppingOutlined />,
          subMenu: [
            {
              title: "Package Lists",
              link: "/real-estate/package/packages",
            },
          ],
        },
        {
          title: "Reports",
          icon: <BankOutlined />,
          subMenu: [
            {
              title: "Subscriptions",
              link: "/real-estate/reports/subscriptions",
            },
            {
              title: "Transactions",
              link: "/real-estate/reports/transactions",
            },
          ],
        },
        {
          title: "Settings",
          icon: <SettingOutlined />,
          subMenu: [
            {
              title: "Profile",
              link: "/real-estate/settings/profile"
            },
            {
              title: "Change Password",
              },
          ],
        },
        {
          title: "Logout",
          icon: <LogoutOutlined />,
        },
      ],
    },
    {
      role: "landlord",
      routes: [
        {
          title: "Home",
          icon: <HomeOutlined />,
          link: "/real-estate/overview",
        },
        {
          title: "Real Estate",
          icon: <ApartmentOutlined />,
          subMenu: [
            {
              title: "Property",
              link: "/real-estate/property/properties",
            },

            {
              title: "Property Feature",
              link: "/real-estate/property/property-features",
            },

            {
              title: "Property Categories",
              link: "/real-estate/property/property-categories",
            },
            {
              title: "Property Type",
              link: "/real-estate/property/property-types",
            },
          ],
        },
        {
          title: "Product",
          icon: <ShoppingOutlined />,
          subMenu: [
            {
              title: "Package Lists",
              link: "/real-estate/package/packages",
            },
          ],
        },
        {
          title: "Reports",
          icon: <BankOutlined />,
          subMenu: [
            {
              title: "Subscriptions",
              link: "/real-estate/reports/subscriptions",
            },
            {
              title: "Transactions",
              link: "/real-estate/reports/transactions",
            },
          ],
        },
        {
          title: "Settings",
          icon: <SettingOutlined />,
          subMenu: [
            {
              title: "Profile",
              link: "/real-estate/settings/profile"
            },
            {
              title: "Change Password",
              },
          ],
        },
        {
          title: "Logout",
          icon: <LogoutOutlined />,
        },
      ],
    },
    {
      role: "artisan",
      routes: [
        {
          title: "Home",
          icon: <HomeOutlined />,
          link: "/real-estate/overview",
        },
        {
          title: "Real Estate",
          icon: <ApartmentOutlined />,
          subMenu: [
            {
              title: "Property",
              link: "/real-estate/property/properties",
            },

            {
              title: "Property Feature",
              link: "/real-estate/property/property-features",
            },

            {
              title: "Property Categories",
              link: "/real-estate/property/property-categories",
            },
            {
              title: "Property Type",
              link: "/real-estate/property/property-types",
            },
          ],
        },
        {
          title: "Settings",
          icon: <SettingOutlined />,
          subMenu: [
            {
              title: "Profile",
              link: "/real-estate/settings/profile"
            },
            {
              title: "Change Password",
              },
          ],
        },
        {
          title: "Logout",
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  const setMenu = () =>
    menus.find((item) => item.role === 'admin')?.routes;

  const menu = setMenu();
  return (
    <MenuStyled>
      {/* <Deposit /> */}
      <div className="m-4">
        <img className="w-1 h-1" src="/images/logo.png" alt="septem logo"/>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[router.pathname]}
        className="menu"
      >
        {
          // @ts-ignore
          menu?.map((item, ii) =>
          // @ts-ignore
            item.subMenu?.length > 0 ? (
              <Menu.SubMenu
                title={item.title}
                icon={item.icon}
                key={item.title}
                className="sub-menu"
              >
                {
                  // @ts-ignore
                  item.subMenu.map((e, i) => (
                    <Menu.Item
                      key={e.title}
                      // onClick={() => {
                      //   e.action ? e.action() : handleClick(e.link);
                      // }}
                    >
                      {e.link ? (
                        <Link href={e.link} key={e.title}>
                          <a>{e.title}</a>
                        </Link>
                      ) : (
                        e.title
                      )}
                    </Menu.Item>
                  ))
                }
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.title}
                icon={item.icon}
                // onClick={() => {
                //   item.action ? item.action() : handleClick(item.link);
                // }}
                className="sub"
              >
                {item.link ? (
                  <Link href={item.link} key={item.title}>
                    <a>{item.title}</a>
                  </Link>
                ) : (
                  item.title
                )}
              </Menu.Item>
            )
          )
        }
      </Menu>
    </MenuStyled>
  );
};

const DashboardLayout: any = (props: IOption) => {
  const {children} = props;
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed((prevState) => !prevState);
  };

//   const toggle = () => {
//     setState({
//       collapsed: !state.collapsed,
//     });
//   };

    return (
      <DashboardStyled className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed} className="hidden md:block md:bg-primary">
          <AppMenu />
        </Sider>
        <Layout className="bg-white">
          <Header className="flex items-center justify-between px-12 py-2 text-white bg-primary lg:bg-tertiary lg:text-primary">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'text-2xl leading-10 cursor-pointer transition-colors hover:text-lightPrimary',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="p-4 lg:p-10 min-h-3/4"
          >
            {children}
          </Content>
        </Layout>
      </DashboardStyled>
    );
}

const DashboardStyled = styled(Layout)`
  .ant-menu-item-selected .ant-menu-item-selected a {
    width: 75%;
    background: red;
    padding-left: 10px;
    transform: perspective(210px) rotatey(5deg) rotatex(-13deg);
  }
  .balance {
    border: none !important;
    display: flex;
    flex-direction: column;
    height: 4rem;
    justify-content: center;
    align-items: center;
    line-height: 2;
  }
`;

const MenuStyled = styled.div`
  background-color: inherit;

  .logo {
    img {
      width: 100%;
    }
  }
  .menu {
    background: inherit;
    margin-top: 1rem;
    font-size: 1.5rem;

    .sub-menu {
      background: inherit;
      color: #fff;
      padding: 0.5rem 0rem;

      ul {
        background: ${(props: any) => props.theme.colors.lightPrimary};
      }
    }
  }
  } */
`;

export default DashboardLayout;