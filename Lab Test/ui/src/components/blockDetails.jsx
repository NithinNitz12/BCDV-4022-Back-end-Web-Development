import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "./header";
import InfoIcon from "@mui/icons-material/Info";
import { Box, useTheme } from "@mui/material";

function BlockDetails(props) {
  const { address, balance, gasUsed, transactionCount } = props;
  console.log(`receipt props ${JSON.stringify(props)}`);

  const theme = useTheme();

  if (!address) {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.info.main,
          color: "black",
          padding: 2,
          borderRadius: 1,
        }}
      >
        Ethereum Addresses required.
      </Box>
    );
  }

  return (
    <>
      <Header title="Block Details" headerSize="h6" icon={InfoIcon} />
      <TableContainer component={Paper}>
        <Table aria-label="table">
          <TableHead></TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">{address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Balance</TableCell>
              <TableCell align="left">{balance} ETH</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Gas Used</TableCell>
              <TableCell align="left">{gasUsed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Transactions</TableCell>
              <TableCell align="left">{transactionCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BlockDetails;
