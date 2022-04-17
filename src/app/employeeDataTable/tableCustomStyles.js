export const tableCustomStyles = {
  table: {
    style: {
      padding: '5px',
      margin: '50px 10px',
      borderRadius: '10px',
      boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px',
    }
  },
  tableWrapper: {
    style: {
      padding: '10px',
      borderRadius: '10px',
    }
  },
  rows: {
      style: {
          minHeight: '55px', // override the row height
      },
  },
  headRow: {
    style: {
      backgroundColor: 'midnightBlue',
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
      textAlign: 'center',
    }
  },
  headCells: {
      style: {
          minHeight: '65px',
          fontWeight: '700',
          fontSize: '.9rem',
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          color: 'aliceBlue',
          justifyContent: 'center',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
          justifyContent: 'center',
      },
  },
};