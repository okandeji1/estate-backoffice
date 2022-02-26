import React from "react";
import {Select} from "antd";
import styled from "@emotion/styled";

const BaseSelect = (props) => {
  const {children, ...rest} = props;
  return <SelectStyled {...rest}>{children}</SelectStyled>;
};

const SelectStyled = styled(Select)`
  .ant-select-selector {
    border-radius: 10px 10px 10px 0px !important;

    /* display: block !important;
    appearance: none !important;
    width: 100% !important;
    height: 3rem !important;
    border-radius: 0.25rem !important;
    display: block !important;
    margin-bottom: 0.75rem !important;
    padding: 0.75rem 1rem !important;
    --bg-opacity: 1;
    background-color: #edf2f7 !important;
    background-color: rgba(237, 242, 247, var(--bg-opacity)) !important;
    --text-opacity: 1;
    color: #4a5568 !important;
    color: rgba(74, 85, 104, var(--text-opacity)) !important;
    line-height: 1.25rem !important;
    border-width: 1px !important;
    border-radius: 0.25rem !important;
    padding: 0.75rem 1rem !important;
    margin-bottom: 0.75rem !important;
    border: 1px solid #4a5568 !important; */
  }
  /* .ant-select-selection-placeholder {
    margin: auto !important;
  }

  .ant-select-selector:focus {
    outline: 0;
    --bg-opacity: 1;
    background-color: #fff !important;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
  }
  .ant-select-arrow {
    top: 47% !important;
  }
  .ant-select-selection-item {
    line-height: 20px !important;
    margin: auto !important;
  }   */
`;
export default BaseSelect;
