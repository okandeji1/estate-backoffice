import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";
import { title } from "process";

const AppInput = (props) => {
  const { children, ...rest } = props;
  return (
    <InputStyled
      className="block w-full h-12 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:bg-white "
      {...rest}
    >
      {children}
    </InputStyled>
  );
};

const InputStyled = styled(Input)`
  ::before {
    border-style: none;
  }
`;
export default AppInput;
