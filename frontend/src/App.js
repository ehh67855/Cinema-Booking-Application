import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NoPage from './components/NoPage';
import Layout from './components/Layout/Layout';
import MovieBrowse from './components/BrowseMovie/MovieBrowse';
import MovieDetails from './components/ViewMovie/MovieDetails';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Layout><HomePage /> </Layout>} />
          <Route path="/Browse" element={<Layout><MovieBrowse /></Layout>} />
          <Route path="/movie/:id" element={<Layout><MovieDetails /></Layout>}/>
          <Route path="*" element={<Layout><NoPage /></Layout>} />
    </Routes>
  );
}

export default App;