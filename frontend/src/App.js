import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NoPage from './components/NoPage';
import Layout from './components/Layout/Layout';
import MovieBrowse from './components/BrowseMovie/MovieBrowse/MovieBrowse';
import MovieDetails from './components/ViewMovie/MovieDetails/MovieDetails';
import AdminMoviesPage from './components/admin/AdminMoviesPage';
import EditMovie from './components/admin/EditMovie';
import AdminPromotionsPage from './components/admin/AdminPromotionsPage';
import AdminMainPage from './components/admin/AdminMainPage';
import BookTickets from './components/BookTicketsPages/BookTickets';
import TicketOrder from './components/BookTicketsPages/TicketOrder';
import Checkout from './components/CheckoutPages/Checkout';
import OrderConfirm from './components/CheckoutPages/OrderConfirm';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Layout><HomePage /> </Layout>} />
          <Route path="/Browse" element={<Layout><MovieBrowse /></Layout>} />
          <Route path="/movie/:id" element={<Layout><MovieDetails /></Layout>}/>
          <Route path="/adminMainPage" element={<Layout><AdminMainPage /></Layout>} />
          <Route path="/manageMovies" element={<Layout><AdminMoviesPage /></Layout>} />
          <Route path="/editMovie/:id" element={<Layout><EditMovie /></Layout>}/>
          <Route path="/promotions" element={<Layout><AdminPromotionsPage /></Layout>} />
          <Route path="/bookTickets" element={<Layout><BookTickets /></Layout>} />
          <Route path="/ticketOrder" element={<Layout><TicketOrder /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          <Route path="/orderConfirmation" element={<Layout><OrderConfirm /></Layout>} />
          <Route path="*" element={<Layout><NoPage /></Layout>} />
    </Routes>
  );
}

export default App;