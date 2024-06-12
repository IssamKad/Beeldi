import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import EquipmentListPage from './pages/EquipmentList/EquipmentListPage'
import EquipmentDetailPage from './pages/EquipmentDetail/EquipmentDetailPage'
import Home from './pages/Home'
import Layout from './layouts/Layout'

const App =() => {

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>

              <Route index element={<Home/>} />
              <Route path="equipments" element={<EquipmentListPage/>} />
              <Route path="equipments/:id" element={<EquipmentDetailPage/>}/>

            </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
