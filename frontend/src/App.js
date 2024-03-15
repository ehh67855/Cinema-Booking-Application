import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NoPage from './components/NoPage';
import Layout from './components/Layout/Layout';
import MovieBrowse from './components/BrowseMovie/MovieBrowse/MovieBrowse';
import MovieDetails from './components/ViewMovie/MovieDetails/MovieDetails';
import AdminMoviesPage from './components/admin/AdminMoviesPage';
import EditMovie from './components/admin/EditMovie';
import AdminPromotionsPage from './components/admin/AdminPromotionsPage';
import AdminUsersPage from './components/admin/AdminUsersPage';
import AdminMainPage from './components/admin/AdminMainPage';
import BookTickets from './components/BookTicketsPages/BookTickets';
import TicketOrder from './components/BookTicketsPages/TicketOrder';
import Checkout from './components/CheckoutPages/Checkout';
import OrderConfirm from './components/CheckoutPages/OrderConfirm';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import SignupConfirmation from './components/Signup/SignupConfirmation';
import EditProfile from './components/EditProfile/EditProfile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import './index.css';

localStorage.setItem("userStatus","unregistered");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><MovieBrowse /> </Layout>} />
      <Route path="/edit-profile" element={<Layout><EditProfile/></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/register" element={<Layout><Signup /></Layout>} />
      <Route path="/register-confirmation" element={<Layout><SignupConfirmation /></Layout>} />
      <Route path="/movie/:id" element={<Layout><MovieDetails /></Layout>}/>
      <Route path="/adminMainPage" element={<Layout><AdminMainPage /></Layout>} />
      <Route path="/manageMovies" element={<Layout><AdminMoviesPage /></Layout>} />
      <Route path="/editMovie/:id" element={<Layout><EditMovie /></Layout>}/>
      <Route path="/promotions" element={<Layout><AdminPromotionsPage /></Layout>} />
      <Route path="/manageUsers" element={<Layout><AdminUsersPage /></Layout>} />
      <Route path="/bookTickets" element={<Layout><BookTickets /></Layout>} />
      <Route path="/ticketOrder" element={<Layout><TicketOrder /></Layout>} />
      <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
      <Route path="/orderConfirmation" element={<Layout><OrderConfirm /></Layout>} />
      <Route path="/forgot-password" element={<Layout><ForgotPassword></ForgotPassword></Layout>}/>
      <Route path="/SignupConfirmation" element={<Layout><SignupConfirmation></SignupConfirmation></Layout>}/>
      <Route path="*" element={<Layout><NoPage /></Layout>} />
    </Routes>
  );
}

export default App;