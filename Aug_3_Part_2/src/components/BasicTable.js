import { AppBar, Button, Card, CardContent, Container, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
const BasicTable = () => {
    const[name,setName] = useState("");
    const handleSubmit = () => {
        alert("Hello " +name + " How are You");
    }
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Welcome to Material Table</Typography>
                </Toolbar>
            </AppBar> 
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                             Enter Your Name
                        </Typography>
                       <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '1rem' }}
            />
             <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Greet Me
            </Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default BasicTable