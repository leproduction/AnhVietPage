import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoPages from './NoPage';
import DownloadLinkPage from './DownloadPage';

import AdminManagementPage from './Component/adminManagement';
import BackEnd from './Component/backend';
import SignUpPage from './Component/SignUp';
import AdminLoginPage from './Component/AdminLoginPage';


const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} ></Route>
          <Route  path="/home" element={<Home />} />
          <Route  path="/download" element={<DownloadLinkPage />} />
          <Route  path="*" element={<NoPages />} />

          <Route  path="/management" element={<AdminManagementPage />} />
          <Route  path="/backend" element={<BackEnd />} />
          <Route path="/Signup" element={<SignUpPage/>}/>
          <Route path="/AdminLogin" element={<AdminLoginPage/>}/>

        </Routes>
      </BrowserRouter>

  );
};

export default App;
