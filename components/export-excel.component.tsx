import React from "react";
import {Button} from "antd";
import * as FileSaver from "file-saver";
import * as Excel from "exceljs";
import { processingReportData } from "../util/utils";
import Icon, { FileExcelOutlined } from "@ant-design/icons";

const ExportExcel = ({csvData}) => {
  // Export to excel
  const exportToExcel = async(csvData: any) => {
    const fileEXT = '.xlsx';
    const workbook = new Excel.Workbook(); // Create a workbook
    processingReportData(csvData, workbook);
    // Keep in mind that reading and writing is promise based.
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'array' });
      FileSaver.saveAs(blob, csvData.fileName + fileEXT);
    });
  };

  // Export to csv
  const exportToCSV = async (csvData: any) =>  {
    const fileEXT = '.csv';
    const workbook = new Excel.Workbook(); // Create a workbook
    processingReportData(csvData, workbook);
    // Keep in mind that reading and writing is promise based.
    workbook.csv.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'array' });
      FileSaver.saveAs(blob, csvData.fileName + fileEXT);
    });
  };

  return (
    <div className="flex items-center justify-between">
      <Button
      block={true}
      onClick={(e) => exportToExcel(csvData)}
      className="w-8 h-8 my-2 mr-2 btn-danger"
      disabled={csvData.disabled}
      // icon={<FileExcelOutlined />}
    >
      EXCEL
    </Button>
    {/* <Icon component={FileExcelOutlined} className="w-8 h-8 mr-4 fill-current cursor-pointer text-red-600" /> */}
    <Button
      block={true}
      onClick={(e) => exportToCSV(csvData)}
      className="w-8 h-8 my-2 btn-success"
      disabled={csvData.disabled}
    >
      CSV
    </Button>
    </div>
  );
};

export default ExportExcel;
