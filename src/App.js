import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";


const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    }
  }));

function App() {

  
  const classes = useStyles()

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>        
        <Route path='/' element={<HomePage />} />
        <Route path='/coins/:id' element={<CoinPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
