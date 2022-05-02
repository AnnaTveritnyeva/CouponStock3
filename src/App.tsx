import React, { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Navbar from './components/layout/Navbar';
import Company from './model/Company';
import { Coupon } from './model/Coupon';
import { updateAllCompanies, updateAllCoupons } from './redux/actions/GuestActions';
import store from './redux/store';
import axios from "axios"
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  const getServerData = () => {
    axios.get<Coupon[]>("http://localhost:8080/guest/getAllCoupons")
      .then(res => {
        store.dispatch(updateAllCoupons(res.data))
        //setLoading(false)
      }
      );

      axios.get<Company[]>("http://localhost:8080/guest/getAllCompanies")
      .then(res => {
        store.dispatch(updateAllCompanies(res.data))
        setLoading(false)
      }
      );
      
  }

  useEffect(() => {
    getServerData();
  }, [loading])

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


