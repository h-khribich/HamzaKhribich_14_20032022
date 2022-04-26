import React from 'react';
import DataTable from 'react-data-table-component'
import { tableCustomStyles } from '../app/employeeDataTable/tableCustomStyles'

/**
 * Table component 
 * @param {Array} columns - Data columns
 * @param {Object} data - Table data
 */
const Table = ({columns, data}) => {
  return (
    <DataTable columns={columns} data={data} customStyles={tableCustomStyles} />
  );
};

export default Table;