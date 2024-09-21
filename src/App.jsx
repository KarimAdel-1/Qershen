/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LogIn />} /> */}
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
