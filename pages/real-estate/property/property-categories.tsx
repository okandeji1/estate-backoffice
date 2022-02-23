import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Col, Popover, Row, Table, Tooltip, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import {
  setShowAddPropertyCategory,
} from "../../../store/slices/app-settings.slice";
import AppSearch from "../../../components/app-search.component";
import AppTable from "../../../components/app-table.component";
import ExportExcel from "../../../components/export-excel.component";
import Wrapper from "../../../container/layouts/dashboard.layout";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Filter from "../../../components/filter.component";
import { selectProperties, getProperties } from "../../../store/slices/property.slice";
import { capitalize } from "../../../util/utils";
import { EditOutlined, UserDeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { openNotification } from "../../../components/notify";

const AddPropertyCategory = dynamic(
  () => import("../../../components/add-property-category.component")
);

const PropertyCategory = () => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();

  const [categories, setCategory] = useState<any>([]);
  
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
      title: "Property Category",
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
          {record.property_category}
        </Button>
      ),
      key: "property_category",
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

  const handleTableChange = () => {}

  const getCategories = async () => {
    try {
      const { data: responseData } = await axios({
        url: `/api/v1/properties/get-property-categories`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      if (responseData.success) {
        setCategory(responseData.data);
      } else {
        openNotification({
          type: "error",
          message: "Error",
          description: `update failed! \n ${responseData.message}`,
        });
      }
    } catch (error) {
      openNotification({
        type: "error",
        message: "Error",
        description: `Internal server error`,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <AddPropertyCategory />
      <PageStyled>
        <UserStyled>
          <Typography.Title level={4} className="title">
            Property Category List
          </Typography.Title>
        </UserStyled>

        {/* <Filter startingRole='admin' /> */}
        <div className="flex flex-col justify-between items-center md:flex-row w-full">
          <AppSearch className="order-2 md:order-1" />
          <div className="flex w-full order-1 md:order-2 justify-between md:justify-end items-center mb-2">
          <ExportExcel
            csvData={{
              records: categories,
              fileName: 'Property_Categories',
              source: "PROPERTY_CATEGORIES",
            //   disabled: categories?.loading === "LOADING",
            }}
          />
          <Button
            className="btn-secondary ml-3"
            onClick={() => dispatch(setShowAddPropertyCategory(true))}
            >

            {'Add New Property Categories'}
          </Button>
          </div>
        </div>
        <div style={{overflowX: "auto"}}>
          <AppTable
            columns={fullColumns}
            data={categories}
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

PropertyCategory.Layout = Wrapper;

export default PropertyCategory;
