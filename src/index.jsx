import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='favs' element={<Favs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


