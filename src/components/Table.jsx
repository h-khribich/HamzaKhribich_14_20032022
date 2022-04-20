import React from 'react';
import DataTable from 'react-data-table-component'
import { tableCustomStyles } from '../app/employeeDataTable/tableCustomStyles'
// import { employeeData } from '../app/employeeDataTable/employeeData';

const Table = ({columns, data}) => {
  return (
    <DataTable columns={columns} data={data} customStyles={tableCustomStyles} />
  );
};

export default Table;