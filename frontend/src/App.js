import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NoPage from './components/NoPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Layout><HomePage /> </Layout>} />
          <Route path="*" element={<Layout><NoPage /></Layout>} />
    </Routes>
  );
}

export default App;