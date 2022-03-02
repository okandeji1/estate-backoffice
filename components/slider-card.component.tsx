import React from "react";
import { Card, Typography, Slider, Button } from "antd";
import router from "next/router";
import styled from "@emotion/styled";

export default function SliderCard({
  borderColor,
  textColor,
  icon,
  title,
  value,
  onClick,
  hoverable,
}: any) {
  return (
    // <Button onClick={() => router.push("/tenant/users/agents")}>
    <CardStyled
      style={{ borderColor: borderColor }}
      className="shadow-lg slider-item"
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        width: "100%",
        textAlign: "center"
      }}
      
      hoverable={hoverable}
    >
      {icon}

      <div className="slider-text">
        <Typography.Text
          className={`text-4xl`}
          style={{ color: textColor }}
        >
          {value}
        </Typography.Text>
      </div>
    </CardStyled>
    // </Button>
  );
}

const CardStyled = styled(Card)`
  border-radius: 1rem 1rem 1rem 0rem;
  border-width: 1px;
  min-height: 11rem;
  scroll-behavior: smooth;
  transform: scale(0.8);
  scroll-snap-align: start;
  display: flex;
  flex-shrink: 0;
  margin-right: 1rem;
  margin-left: -2rem;
  min-width: 19rem;

  .slider-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    opacity: 0.75px;
    font-weight: 700px;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    margin: 16px;
    img {
      width: 100%;
    }
  }

  .sider {
    background: ${(props: any) => props.theme.colors.primary};
    min-width: 18rem;
  }

  .site-layout {
    background: #fff;
  }

  .header {
    background: ${(props: any) => props.theme.colors.primary};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 0;

    .right-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .btn {
    background: ${(props: any) => props.theme.colors.secondary};
    color: #ffffff;
    border: none;
  }

  @media screen and (min-width: ${(props: any) => props.theme.breakpoints.md}) {
    margin-right: 0rem;
    min-width: 23.7rem;
  }
`;
