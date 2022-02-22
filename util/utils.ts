import dayjs from 'dayjs';

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  const a = s.toLowerCase();
  return a.charAt(0).toUpperCase() + a.slice(1);
};

export const processingReportData = (csvData: any, workbook: any) => {

  if (csvData.source === 'USERS') {
    const worksheet = workbook.addWorksheet('Users'); // Create a worksheet
    // Add column to worksheet
    worksheet.columns = [
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Phone Number', key: 'phoneNumber' },
      { header: 'Email', key: 'email' },
      { header: 'Role', key: 'role' },
      { header: 'Date', key: 'createdAt' },
    ];

    worksheet.columns.forEach((column) => {
      column.width = column.header.length < 12 ? 12 : column.header.length;
    });

    worksheet.getRow(1).font = { bold: true };
    // Dump all the data into Excel
    csvData.records.forEach((e) => {
      worksheet
        .addRow({
          ...e,
          createdAt: dayjs(e.createdAt).format('MMM D, YYYY h:mm A'),
        })
        .commit();
    });
  }
};
