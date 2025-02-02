import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      const displayData = json.slice(0, 20);
      setData(displayData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "50%",
        },
        margin: "2rem auto",
        overflowX: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textAlign: "center",
          color: "#1976d2",
          fontWeight: 600,
        }}
      >
        Posts Data
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2" }}>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "10%",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "10%",
                }}
              >
                UserId
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "35%",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "45%",
                }}
              >
                Body
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#f5f5f5",
                  },
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    transition: "background-color 0.2s ease",
                  },
                  "& td": {
                    padding: "1rem",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "medium",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {item.id}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {item.userId}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                    wordBreak: "break-word",
                  }}
                >
                  {item.title}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                    wordBreak: "break-word",
                  }}
                >
                  {item.body}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
