import React, { useState } from "react";
import { Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { title } from "process";

const AppPassword = props => {
  const { children, ...rest } = props;
  const [visible, setVisible] = useState(false);
  return (
    <PasswordStyled
      type={visible ? "text" : "password"}
      className="appearance-none border-gray-700  flex w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-12"
      {...rest}
      suffix={
        visible ? (
          <EyeTwoTone
            className="password-icon"
            onClick={(e) => {
              e.preventDefault();
              setVisible(!visible);
            }}
          />
        ) : (
          <EyeInvisibleOutlined
            className="password-icon"
            onClick={(e) => {
              e.preventDefault();
              setVisible(!visible);
            }}
          />
        )
      }
    >
      {children}
    </PasswordStyled>
  );
};

const PasswordStyled = styled(Input)`
  .password-icon {
    color: #013d79;
  }
  input {
    background: transparent;
  }
`;
export default AppPassword;
