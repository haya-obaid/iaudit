"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableActions from "../TableAction";
import clsx from "clsx";
import { Checkbox } from "@mui/joy";
import { useState } from "react";

export default function ClientTable({
  columns,
  rows,
  clientTable,
  statisticsColumns,
  tableNum,
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none" }}
      className="font-poppins"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns?.map((column, index) => (
              <TableCell key={index} align={"start"}>
                {column.label}
              </TableCell>
            ))}
            {tableNum == 3 && (
              <>
                <TableCell align={"start"}>Response</TableCell>
                <TableCell align={"start"}>Comments</TableCell>
                <TableCell align={"start"}>Files</TableCell>
              </>
            )}
            {tableNum == 4 && <TableCell align={"start"}>File</TableCell>}
            {clientTable && <TableCell align={"start"}>Actions</TableCell>}
            {tableNum == 5 && <TableCell align={"start"}>Actions</TableCell>}
            {statisticsColumns && (
              <>
                <TableCell align={"start"}>Status</TableCell>
                <TableCell align={"center"}>Finalization</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex} align={"start"}>
                  {row[column.field]}
                </TableCell>
              ))}
              {tableNum == 3 && (
                <>
                  <TableCell align={"start"}>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1">
                        <input type="radio" name="group" />
                        <span>Yes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="radio" name="group" />
                        <span>No</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="radio" name="group" />
                        <span>N/A</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align={"start"}>
                    <textarea className="bg-[#F9F9FF] resize-none outline-none w-56 !h-16 p-2"></textarea>
                  </TableCell>
                  <TableCell align={"start"}>
                    <TableActions tableNum={tableNum} />
                  </TableCell>
                </>
              )}
              {tableNum == 4 || tableNum == 5 ? (
                <TableCell align={"start"}>
                  <TableActions tableNum={tableNum} />
                </TableCell>
              ) : null}
              {clientTable && (
                <TableCell align={"start"}>
                  <TableActions clienttable />
                </TableCell>
              )}
              {statisticsColumns && (
                <>
                  <TableCell align={"right"} sx={{ width: "100px" }}>
                    <p
                      className={clsx(
                        "px-2 py-1.5 rounded-[4px] text-xs w-[90px]",
                        row?.status == "in-progress" && "bg-[#FFCC00]/40",
                        row?.status == "completed" && "bg-[#34C759]/40",
                        row?.status == "not-started" && "bg-[#F2F1FA]"
                      )}
                    >
                      {row?.status}
                    </p>
                  </TableCell>
                  <TableCell align={"center"} sx={{ textAlign: "center" }}>
                    <Checkbox
                      size="sm"
                      // checked={selectAll}
                      // onChange={(e) => handleSelectAllChange(e.target.checked)}
                    />
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
