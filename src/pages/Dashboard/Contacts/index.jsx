import { Avatar, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../Components/Header";
import useDonors from "../../../hooks/useDonors/useDonors";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [allDonors, donorsLoader] = useDonors();
  console.log(allDonors);
  const columns = [
    {field:'image',headerName:"PHOTO",width:60,renderCell:(params)=><Avatar src={params.row.image} />,sortable:false,filterAble:false},
    { field: "fullName", headerName: "Name", flex: 1, cellClassName: "name-column--cell", },
    {
      field: "number",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: 'amount',
      headerName: "$ Amount",
      flex: 1,
    },
  ];
  if (donorsLoader) {
    return <div className="flex justify-center mt-52">
      <p>Loading.......</p>
    </div>
}
  return (
    <Box m="20px">
      <Header
        title="DONORS"
        subtitle="List of Donors Info"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={allDonors}
          columns={columns}
          getRowId={(rows) => rows._id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
