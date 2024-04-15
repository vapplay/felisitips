"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  {
    field: "checkbox",
    headerName: "Checkbox",
    width: 100,
    renderCell: (params: any) => (
      <input
        type="checkbox"
        checked={params.row.selected}
        onChange={() => {}}
      />
    ),
  },
  { field: "id", headerName: "ID", width: 90 },
  { field: "by", headerName: "Author", width: 200 },
  { field: "phrase", headerName: "Quote", width: 500 },
  { field: "createdAt", headerName: "Created At", width: 180 },
];

const Quote = () => {
  const [myDate, setMyDate] = useState([]);
  const getDate = async () => {
    try {
      const { data } = await axios.get(
        "https://felisitips-back.onrender.com/get-phrase"
      );
      setMyDate(data);
    } catch (error) {}
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <DataGrid
      
      rows={myDate}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 20 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
};

export default Quote;
