import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

const columns = [
  { id: "link", label: "Sosyal Medya Linki", align: "center" },

  {
    id: "name",
    label: "Sosyal Medya Adı",
    minWidth: 170,
    align: "center",
  },
  {
    id: "explaination",
    label: "Açıklamalar",
    minWidth: 170,
    align: "center",
  },
];
const headerStyle = {
  fontWeight: "bold",
  fontSize: "16px",
  minWidth: 170,
};

function createData(link, name, explaination) {
  return { link, name, explaination };
}

// Tablo göstermek için Statik veri oluşturuldu

const rows = [
  createData(
    "https://twitter.com/rastmobile",
    "Twitter",
    "We'll help you to finish your development project successfully"
  ),
  createData(
    "https://www.linkedin.com/company/rastmobile/",
    "Linkedin",
    "Hire vetted developers fro Rast Mobile to scale up your tech projects"
  ),
  createData(
    "https://www.behance.net/rastmobile",
    "Behance",
    "Our UI/UX designers are elegance"
  ),
  createData(
    "https://www.instagram.com/behance/",
    "Instagram",
    "We're at your service whenever you want"
  ),
  createData(
    "https://twitter.com/rastmobile",
    "Twitter",
    "We'll help you to finish your development project successfully"
  ),
  createData(
    "https://www.linkedin.com/company/rastmobile/",
    "Linkedin",
    "Hire vetted developers fro Rast Mobile to scale up your tech projects"
  ),
  createData("", "", ""),
  createData("", "", ""),
];

//sayfa başına  veri için tablo pagination componenti kullanıldı

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ overflowX: "auto" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={headerStyle}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
