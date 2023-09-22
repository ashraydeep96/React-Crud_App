import "./App.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "./components/Navbar";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState([]);

  const addData = () =>{
    setData([...data, {name, email, phone}]);
    setName("");
    setEmail("");
    setPhone("");
  }

  const removeItem = (index) =>{
    let arr= data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon fontSize="large" />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Phone</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element,index) => {
            return(
              <div className="data_val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4>{element.phone}</h4>
                <Stack>
                  <Button onClick={() => removeItem(index)} variant="contained" color="error">
                    <DeleteIcon fontSize="medium" />
                  </Button>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
