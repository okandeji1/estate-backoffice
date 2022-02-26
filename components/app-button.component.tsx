import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styled from "@emotion/styled";

const AppButton = (props) => {
  const { children, ...rest } = props;

    return (
        <ButtonStyled
      className="w-40 md:w-40 h-12 rounded-lg bg-secondary font-bold text-white hover:bg-primary hover:text-white px-3 mb-4"
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)`
  ::before {
    border-style: none;
  }
`;

export default AppButton;