import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CarList from './components/CarList';
import {SERVER_URL} from './constants/Constant'


function App() {


  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function fetchData(){
        const result = await axios.get(SERVER_URL+"api/cars");
        setCars(result.data._embedded.cars);
    }
    fetchData(cars);
}, []);

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            CarList
          </Typography>
        </Toolbar>
      </AppBar>
      <CarList data={cars}/>
    </div>
  );
}

export default App;
