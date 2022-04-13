import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


//Pages
import Dashboard from './pages/Dashboard';
import PageNotFound from "./pages/404";

//Global Style
import { GlobalStyle } from "./globalStyles";
import Login from './components/Login';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
      console.log(json);
    }
    getToken();
  }, []);

  return (
    <Router>

      <GlobalStyle/>
      
      <Routes>

        {/* <Route exact path="/"  element={ (token === '') ? <Login/> : <WebPlayback token={token} /> } /> */}
        <Route exact path="/"  element={ (token === '') ? <Login/> : <Dashboard token={token}/> } />
        <Route path="/404" element={<PageNotFound/>} />
        
      </Routes>

    </Router>
    /*
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
    */
  );
}

export default App;