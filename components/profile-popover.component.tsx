import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Typography, Button, Popover } from "antd";
import styled from "@emotion/styled";
import { IOption } from "../types/types";

export default function ProfilePover({ children, user, logout }: IOption) {
  const router = useRouter();
  useEffect(() =>{
  })
  return (
    <Popover
      placement="bottomRight"
      overlayStyle={{ width: "280px" }}
      content={
        <PopoverStyled>
          <div className="item">
            <Typography.Text>FIRST NAME:</Typography.Text>
            
            <Typography.Text>{user?.firstName}</Typography.Text>
          </div>
          <div className="item">
            <Typography.Text>LAST NAME:</Typography.Text>
            <Typography.Text>{user?.firstName}</Typography.Text>
          </div>
          <div className="item">
            <Typography.Text>ROLE:</Typography.Text>
            <Typography.Text>{user?.role?.toUpperCase()}</Typography.Text>
          </div>
          <Button className="btn" onClick={logout}>
            Logout
          </Button>
        </PopoverStyled>
      }
      trigger="click"
    >
      {children}
    </Popover>
  );
}

const PopoverStyled = styled.div`
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    color: black;
  }
  .btn {
    background-color: ${(props: any) => props.theme.colors.secondary};
    color: #fff;
    height: 40px;
    border-radius: 5px;
    margin-top: 1rem;
  }
`;
