import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";
import { title } from "process";
const { Search } = Input;

const AppSearch = (props) => {
  const { children, ...rest } = props;
  return <InputStyled {...rest}>{children}</InputStyled>;
};

const InputStyled = styled(Search)`
  border-radius: 10px 10px 10px 0px;
`;
export default AppSearch;
