import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Col, Popover, Row, Table, Tooltip, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  setShowAddProperty,
} from "../../../store/slices/app-settings.slice";
import AppSearch from "../../../components/app-search.component";
import AppTable from "../../../components/app-table.component";
import ExportExcel from "../../../components/export-excel.component";
import Wrapper from "../../../container/layouts/dashboard.layout";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import dynamic from "next/dynamic";
import Filter from "../../../components/filter.component";
import { selectProperties, getProperties } from "../../../store/slices/property.slice";
import { capitalize } from "../../../util/utils";
import { DeleteRowOutlined, EditOutlined, UserDeleteOutlined } from "@ant-design/icons";

const AddProperty = dynamic(
  () => import("../../../components/add-property.component")
);

const Property = () => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const properties = useSelector(selectProperties);
  
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
      title: "Title",
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
          {record.title}
        </Button>
      ),
      key: "title",
      ellipsis: true,

      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ellipsis: true,
      align: "center",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      ellipsis: true,
      align: "center",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      ellipsis: true,
      align: "center",
    },
    {
      title: "Date Added",
      key: "createdAt",
        render: (text, record) => dayjs(record.createdAt).format("MMM D, YYYY h:mm A"),
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
                icon={<DeleteRowOutlined />}
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
                    icon={<DeleteRowOutlined />}
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

  

  const handleTableChange = () => {}

  console.log(properties);
  useEffect(() => {
    dispatch(getProperties({ query: {  } }));
  }, []);

  return (
    <div>
      <div>{properties}</div>
      <AddProperty role='agent' callback={getProperties} />
      <PageStyled>
        <UserStyled>
          <Typography.Title level={4} className="title">
            Property List
          </Typography.Title>
        </UserStyled>

        {/* <Filter startingRole='admin' /> */}
        <div className="flex flex-col justify-between items-center md:flex-row w-full">
          <AppSearch className="order-2 md:order-1" />
          <div className="flex w-full order-1 md:order-2 justify-between md:justify-end items-center mb-2">
          <ExportExcel
            csvData={{
              records: properties?.data,
              fileName: 'Properties',
              source: "PROPERTIES",
              disabled: properties?.loading === "LOADING",
            }}
          />
          <Button
            className="btn-secondary ml-3"
            onClick={() => dispatch(setShowAddProperty(true))}
            >

            {'Add New Properties'}
          </Button>
          </div>
        </div>
        <div style={{overflowX: "auto"}}>
          <AppTable
            columns={fullColumns}
            data={properties?.data}
            page='10'
            title={() => "Property List"}
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

Property.Layout = Wrapper;

export default Property;
