import React from "react";
import Users from "../../../components/users.component";
import Wrapper from "../../../container/layouts/dashboard.layout";

const UserList = () => {
  return <Users role="agent" />;
};

UserList.Layout = Wrapper;
export default UserList;

