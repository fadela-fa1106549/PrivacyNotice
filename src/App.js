import React from 'react';
import English from './English'
import Arabic from './Arabic'
import Navigation from './Navigation'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {

  return (
  <div>
<Navigation></Navigation>
  <Router basename='/'>
      <Routes>
        <Route exact path='/PrivacyNotice/en' element={<English/>}></Route>
        <Route exact path='/PrivacyNotice/ar' element={<Arabic/>}></Route>
      </Routes>
      </Router>
      
  </div>

)}

export default App;
