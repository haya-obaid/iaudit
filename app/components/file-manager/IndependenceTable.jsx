import checkIcon from "@/app/assets/icons/check-mark-lg.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
export default function IndependenceTable() {
  function createData(id, name, yes, no, notes) {
    return { id, name, yes, no, notes };
  }
  const rows = [
    createData(
      "1",
      "Do you read the rules of independence and its interpretation according to the requirements of laws and regulations related to the profession and the professional standards by Saudi Organization for chartered and Professional Accountant and other related laws?",
      1,
      0,
      "No Comment"
    ),
    createData(
      "2",
      "Have you reviewed the names of founders, board members, executives and partners for the client to see if there are operations or relationships prejudice the requirements of independence?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "3",
      "Do you have a relative relation with one of founders, board members or client's executives?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "4",
      "Are you one of the entity’s co-founders?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "5",
      "Are you member of the board of directors?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "6",
      "Do you provide a consultancy services to the client?",
      1,
      0,
      "No Comment"
    ),
    createData(
      "7",
      "Do you own significant equity shares of the client?",
      1,
      0,
      "No Comment"
    ),
    createData(
      "8",
      "Are you a partner for one of key client’s staff?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "9",
      "Are you a business partner for one of client senior partners?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "10",
      "Are you a business partner for the client?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "11",
      "Are you an endowment’s trustee where the client has a share?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "12",
      "Are you an inheritance’s trustee where the client has a share?",
      0,
      1,
      "No Comment"
    ),
    createData("13", "Do you have a loan from the client?", 0, 1, "No Comment"),
    createData(
      "14",
      "Do you have a loan from one of key client staff?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "15",
      "Do you have a loan from a member of board of director?",
      0,
      1,
      "No Comment"
    ),
    createData(
      "16",
      "Do you have a loan from one of client’s senior partners?",
      0,
      1,
      "No Comment"
    ),
    createData("17", "Do you own a similar business?", 0, 1, "No Comment"),
    createData(
      "18",
      "Are you a member of board of directors for an entity that have a similar business?",
      0,
      1,
      "No Comment"
    ),
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none" }}
      className="font-poppins"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="start">Name</TableCell>
            <TableCell align="start">Yes</TableCell>
            <TableCell align="start">No</TableCell>
            <TableCell align="start" sx={{width:"150px"}}>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="start">{row.name}</TableCell>
              <TableCell align="start">
                {row?.yes == 1 ? <img src={checkIcon.src} /> : null}
              </TableCell>
              <TableCell align="start">
                {row?.no == 1 ? <img src={checkIcon.src} /> : null}
              </TableCell>
              <TableCell align="start" sx={{width:"150px"}}>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
