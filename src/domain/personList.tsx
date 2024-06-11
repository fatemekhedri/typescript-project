import {
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableHead,
  TableCell,
} from "@mui/material";
type personProps = {
  persons: {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  }[];
};
const PersonList = (props: personProps) => {
  const { persons } = props;
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Name (userList)</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">avatar&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((person) => (
            <TableCell key={person.id}>
              <TableCell component="th" scope="row">
                {person.first_name}
              </TableCell>
              <TableCell align="right">{person.last_name}</TableCell>
              <TableCell align="right">{person.email}</TableCell>
              <TableCell align="right">{person.avatar}</TableCell>
            </TableCell>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PersonList;
