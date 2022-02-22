import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Breadcrumb,
  Button,
  Col,
  Popover,
  Row,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import AppSearch from "../components/app-search.component";
import AppTable from "../components/app-table.component";
import ExportExcel from "../components/export-excel.component";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { capitalize } from "../util/utils";
import { setShowAuthenticateUser } from "../store/slices/app-settings.slice";
import { selectUsers, getUsers } from "../store/slices/user.slice";
import { EditOutlined, UserDeleteOutlined } from "@ant-design/icons";

const AuthenticateUser = dynamic(
  () => import("../components/authenticate-user")
);

const Users = ({ role }) => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const [action, setAction] = useState<any>();
  const users = useSelector(selectUsers);

  const showAuth = (action: any) => {
    setAction(action);
    dispatch(setShowAuthenticateUser({ action: action, visible: true }));
  };

  const fullColumns = [
    {
      title: "#",
      key: "index",
      render: (text, record, index) => index + 1,
      sorter: (a, b) => a - b,
      width: "3rem",
      align: "center",
    },

    {
      title: "Name",
      render: (text, record) => (
        <Button
          type="ghost"
          //   onClick={() => {
          //     dispatch(
          //       setShowProfileOne({
          //         role: record.role,
          //         show: true,
          //         user: record,
          //       })
          //     );
          //   }}
          className="text-blue-500 border-0">
          {`${record.firstName} ${record.lastName}`}
        </Button>
      ),
      key: "name",
      ellipsis: true,

      align: "center",
      sorter: (a, b) => a.firstName - b.firstName,
    },
    {
      title: "Phone Number",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      ellipsis: true,
      align: "center",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      ellipsis: true,
      align: "center",
    },
    {
      title: "Date Added",
      key: "createdAt",
      render: (text, record) =>
        dayjs(record.createdAt).format("MMM D, YYYY h:mm A"),
      ellipsis: true,
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: screens.lg ? "18rem" : "auto",
      fixed: screens.lg ? "right" : null,
      render: (text, record) => {
        return screens.lg ? (
          <div className="flex justify-evenly">
            <Tooltip title="Delete User">
              <Button
                type="primary"
                shape="round"
                style={{
                  background: "#f56565",
                  borderColor: "#f56565",
                  lineHeight: "0px",
                }}
                icon={<UserDeleteOutlined />}
                // onClick={() =>}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Edit User">
              <Button
                type="primary"
                shape="round"
                style={{
                  background: "#48bb78",
                  borderColor: "#48bb78",
                  lineHeight: "0px",
                }}
                icon={<EditOutlined />}
                size="small"
              />
            </Tooltip>
          </div>
        ) : (
          <Popover
            placement="bottom"
            content={
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "14rem",
                }}>
                <Tooltip title="Delete User">
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#f56565",
                      borderColor: "#f56565",
                      lineHeight: "0px",
                    }}
                    icon={<UserDeleteOutlined />}
                    // onClick={() =>}
                    size="small"
                  />
                </Tooltip>
                <Tooltip title="Edit User">
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#48bb78",
                      borderColor: "#48bb78",
                      lineHeight: "0px",
                    }}
                    icon={<EditOutlined />}
                    size="small"
                  />
                </Tooltip>
              </span>
            }>
            <Button className="text-blue-500 border-0">Hover Me</Button>
          </Popover>
        );
      },
    },
  ];

  const handleTableChange = () => {};
  const searchBetsData = [
    {
      firstName: "firstName",
      lastName: "lastName",
      username: "username",
      email: "email",
      user: "firstName",
    },
    {
      firstName: "firstName",
      lastName: "lastName",
      username: "username",
      email: "email",
      user: "firstName",
    },
    {
      firstName: "firstName",
      lastName: "lastName",
      username: "username",
      email: "email",
      user: "firstName",
    },
  ];

  useEffect(() => {
    dispatch(getUsers({ query: { role: role } }));
  }, []);

  return (
    <div>
      <AuthenticateUser action={action} />

      <PageStyled>
        <UserStyled>
          <Typography.Title level={4} className="title text-primary">
            {`${capitalize(role)}'s List `}
          </Typography.Title>
        </UserStyled>

        <div className="flex flex-col justify-between items-center md:flex-row w-full">
          <AppSearch className="order-2 md:order-1" />
          <div className="flex w-full order-1 md:order-2 justify-between md:justify-end items-center mb-2">
          <ExportExcel
            csvData={{
              records: users.data,
              fileName: `${capitalize(role)} List `,
              source: "USERS",
              disabled: users?.loading === "LOADING",
            }}
          />
          <Button
            className="btn-secondary ml-3"
            onClick={() => showAuth("REGISTER")}>
            {`Add New ${capitalize(role)}`}
          </Button>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <AppTable
            columns={fullColumns}
            data={users.data}
            page="10"
            title={() => "Users List"}
            onChange={handleTableChange}
          />
        </div>
      </PageStyled>
    </div>
  );
};

const UserStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .search {
    border-radius: 1rem 1rem 1rem 0rem;
    border-width: 1px;
    border: 1px solid #410f8a;
  }
  .title {
    text-align: left;
    font-weight: 400;
    /* font-size: 1.2rem; */
    color: #3e3f42;
  }
`;

const PageStyled = styled.div`
  .table-one {
    border-radius: 1rem 1rem 1rem 0rem;
    border-width: 1px;
    min-width: 1300;
  }
`;

export default Users;
