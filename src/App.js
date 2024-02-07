/* eslint-disable no-unused-vars */
import './App.css';

import './assets/bootstrap/css/bootstrap.css';
import './assets/bootstrap/js/bootstrap';

import './assets/fonts/font-awesome.css';
import './assets/css/selectize.css';
import './assets/css/style.css';
import './assets/css/Cstyle.css';
import './assets/css/user.css';

// Import jQuery
import $ from 'jquery';

// Import Popper.js
import Popper from 'popper.js';

// import './assets/js/custom';
// import './assets/js/owl.carousel.min';
// import './assets/js/icheck.min';
import './assets/js/selectize.min';

import CLayout from './component/CLayout';
import CDetails from './component/CDetails';
import CProfile from './component/CProfile';
import CMessage from './component/CMessage';
import CCulture from './component/CCulture';
import CLogin from './component/CLogin';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<CLayout children={<CCulture />} />} />
          <Route path="/login" exact element={<CLogin />} />
          <Route path="/details" element={<CLayout children={<CDetails />} />} />
          <Route path="/profile/:id" element={<CLayout children={<CProfile />} />} />
          <Route path="/message" element={<CLayout children={<CMessage />} />} />
        </Routes>
    </Router>
  );
}

export default App;
