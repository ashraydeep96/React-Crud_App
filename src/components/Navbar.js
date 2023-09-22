import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <ContactsIcon fontSize='large' />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Record Keeping
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
