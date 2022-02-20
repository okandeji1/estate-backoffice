import React, { useState } from "react";
import { Skeleton } from "antd";
import { Table } from "ant-table-extensions";

const AppSearch = (props) => {
  const {
    children,
    searchData,
    data,
    handleTableChange,
    page,
    columns: fullColumns,
    ...rest
  } = props;

  const [pagination, setPagination] = useState({
    pageSize: 10,
    total: 0,
    defaultPageSize: 10,
    defaultCurrent: 1,
  });

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

  return (
    // <Skeleton loading={data.loading === "LOADING"}>
    <Table
      // rowKey={(record) => record.title}
      className="bg-lightPrimary"
      style={{ minWidth: 1000 }}
      size="small"
      pagination={{
        position: ["topCenter"],
        pageSize: pagination.pageSize,
        total: searchData ? searchData.length : data?.meta?.total,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        defaultPageSize: pagination.defaultPageSize,
        defaultCurrent: pagination.defaultCurrent,
        showSizeChanger: true,

        onShowSizeChange: (current, size) =>
          setPagination({
            ...pagination,
            pageSize: size,
          }),
      }}
      // @ts-ignore
      columns={fullColumns}
      dataSource={ra}
      bordered
      onChange={handleTableChange}
      {...rest}
    />
    // </Skeleton>
  );
};

export default AppSearch;
