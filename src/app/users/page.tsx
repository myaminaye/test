"use client";

import { GroupedUsers } from "@/lib/groupByDepartment";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [data, setData] = useState<GroupedUsers>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        console.log("Response", res);
        return res.json();
      })
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  console.log("Data", data);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-purple-100">Users by Department</h1>
      {Object.entries(data).map(([dept, users]) => (
        <div key={dept} className="mb-8">
          <Typography variant="h6" className="text-purple-200" gutterBottom>
            {dept}
          </Typography>

          <TableContainer component={Paper} elevation={2}>
            <Table size="small">
              <TableHead>
                <TableRow className="bg-purple-100">
                  <TableCell>
                    <strong className="text-purple-600">First Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong className="text-purple-600">Last Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong className="text-purple-600">Age</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
}
