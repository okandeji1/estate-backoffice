import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import AppSearch from "../../../components/app-search.component";
import AppTable from "../../../components/app-table.component";
import ExportExcel from "../../../components/export-excel.component";
import Wrapper from "../../../container/layouts/dashboard.layout";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Filter from "../../../components/filter.component";

const Developer = () => {
  const screens = useBreakpoint();

  const ra = [
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
      title: "Username",
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
          {record.username}
        </Button>
      ),
      key: "username",
      ellipsis: true,

      align: "center",
      sorter: (a, b) => a.username - b.username,
    },
    {
      title: "Name",
      key: "name",
      render: (text, record) => `${record.firstName} ${record.lastName}`,
      sorter: (a, b) => a.firstName - b.firstName,
      ellipsis: true,
      align: "center",
    },
    {
      title: "Phone",
      key: "phone",
      render: (text, record) =>
        record?.phone?.code
          ? `${record?.phone?.code}${record?.phone?.number}`
          : "-",
      ellipsis: true,
      align: "center",
    },
    {
      title: "Parent",
      dataIndex: "parent",
      key: "parent",
      sorter: (a, b) => a - b,
      ellipsis: true,
      align: "center",
    },
    {
      title: "Date Added",
      key: "createdAt",
      //   render: (text, record) => moment(record.createdAt).format("Do MMM, YYYY"),
      ellipsis: true,
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "PENDING",
          value: "PENDING",
        },
        {
          text: "ACTIVE",
          value: "ACTIVE",
        },
        {
          text: "INACTIVE",
          value: "INACTIVE",
        },
      ],
      sorter: (a, b) => a - b,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: screens.lg ? "18rem" : "auto",
      fixed: screens.lg ? "right" : null,
      render: (text, record) => {
        return screens.lg ? (
          <div className="flex justify-evenly">action</div>
        ) : (
          <div>small</div>
        );
      },
    },
  ];

  const handleTableChange = () => {}

  return (
    <div>
      <PageStyled>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
        <UserStyled>
          <Typography.Title level={4} className="title">
            Developers List
          </Typography.Title>
        </UserStyled>

        <Filter startingRole='admin' />
        <div style={{overflowX: "auto"}}>
          <AppTable
            columns={fullColumns}
            data={ra}
            page='10'
            title={() => "Developer List"}
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

Developer.Layout = Wrapper;

export default Developer;
