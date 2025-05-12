import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <Router>
      <Layout>
        <SecurityPage />
      </Layout>
    </Router>
  );
}

export default App;