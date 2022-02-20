import React from "react";
import {Button} from "antd";
import * as FileSaver from "file-saver";
import * as Excel from "exceljs";
import moment from "moment";

const ExportExcel = ({csvData}) => {
  const exportToCSV = (csvData) => {
    const fileEXT = ".xlsx";
    const workbook = new Excel.Workbook(); // Create a workbook
    if (csvData.source === "USERS") {
      const worksheet = workbook.addWorksheet("Users"); // Create a worksheet
      // Add column to worksheet
      worksheet.columns = [
        {header: "Username", key: "username"},
        {header: "Phone Number", key: "phone"},
        {header: "Date Added", key: "createdAt"},
      ];

      worksheet.columns.forEach((column) => {
        column.width = column.header.length < 12 ? 12 : column.header.length;
      });

      worksheet.getRow(1).font = {bold: true};
      // Dump all the data into Excel
      csvData.records.forEach((e) => {
        worksheet
          .addRow({
            ...e,
            name: e.firstName + " " + e.lastName,
            phone: e?.phone?.code ? e.phone?.code + e?.phone?.number : "-",
            createdAt: moment(e.createdAt).format("Do MMM, YYYY"),
          })
          .commit();
      });

      // Keep in mind that reading and writing is promise based.
      workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {type: "array"});
        FileSaver.saveAs(blob, csvData.fileName + fileEXT);
      });
    }
  };

  return (
    <Button
      block={true}
      onClick={(e) => exportToCSV(csvData)}
      className="w-24 h-8 my-2 md:ml-2 btn-success"
      disabled={csvData.disabled}
    >
      EXCEL
    </Button>
  );
};

export default ExportExcel;
