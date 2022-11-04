import React from "react";
import DataTable from "react-data-table-component";

const Tabel = ({ data, columns, loading }) => {
  const customeStyles = {
    headRow: {
      style: {
        border: "1px solid rgba(0,0,0,0.12)",
      },
    },
    headCells: {
      style: {
        color: "red",
      },
    },
    rows: {
      style: {
        "&:not(:last-of-type)": {
          border: "none",
          borderRight: "1px solid rgba(0,0,0,0.12)",
          borderLeft: "1px solid rgba(0,0,0,0.12)",
        },
        "&:last-of-type": {
          border: "none",
          borderRight: "1px solid rgba(0,0,0,0.12)",
          borderLeft: "1px solid rgba(0,0,0,0.12)",
        },
      },
    },
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      customStyles={customeStyles}
      paginationPerPage={[7]}
      progressPending={loading}
      pagination
    />
  );
};

export default Tabel;
