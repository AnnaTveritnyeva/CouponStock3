import React, { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Navbar from './components/layout/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { GuestAxios } from './axios';
import {  UpdateAllCompanies, UpdateAllCoupons } from './redux/selector';

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  const getServerData = () => {
    GuestAxios.getAllCoupons()
      .then(res => {
        UpdateAllCoupons(res.data)
      }
      );

      GuestAxios.getAllCompanies()
      .then(res => {
       UpdateAllCompanies(res.data)
        setLoading(false)
      }
      );   
  }

  useEffect(() => {
    getServerData();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


