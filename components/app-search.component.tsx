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
  .ant-input-group .ant-input {
    float: left;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit;
    border-radius: 1rem 0rem 0rem 1rem;
    height: 3.5rem;
    --tw-bg-opacity: 1;
    background-color: var(--tw-bg-opacity))
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .ant-input-search-button {
    height: 3.5rem;
    background: ${(props: any) => props.theme.colors.secondary};
  }

  .ant-input-search-button:hover { 
    background: ${(props: any) => props.theme.colors.primary};
  }
  
  .anticon svg {
    display: inline-block;
    color: white;
    font-size: x-large;
  }
`;
export default AppSearch;
