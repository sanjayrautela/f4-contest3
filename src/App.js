import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed Switch, which is not used in v6
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/homepage';
import PostDetailPage from './components/postdetailpage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Updated to use `element` */}
          <Route path="/item/:id" element={<PostDetailPage />} /> {/* Updated to use `element` */}
          {/* Other routes can be added here */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
