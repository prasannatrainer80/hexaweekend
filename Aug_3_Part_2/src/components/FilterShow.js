import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';


const FilterShow = () => {
    const [users,setUsers] = useState([])
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true)

    // Fetch data from API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch users', err);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return(
    <div>
         <Container maxWidth="md" style={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
                    User List With Filter Example
          </Typography>
          
      <TextField
        label="Search by name or email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
         <TableContainer component={Paper}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>City</strong></TableCell>
              </TableRow> 
            </TableHead>
            <TableBody>
                     {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
         </TableContainer>
        </Container>
     
    </div>
  )
}

export default FilterShow