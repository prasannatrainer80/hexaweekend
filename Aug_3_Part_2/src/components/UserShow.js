import Paper from '@mui/material/Paper';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const UserShow = () => {
    
    const [users,setUsers] = useState([])
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
  return(
    <div>
         <Container maxWidth="md" style={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
                    User List
          </Typography>
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
                     {users.map((user) => (
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

export default UserShow 