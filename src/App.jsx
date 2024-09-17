import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './features/auth/LogIn';
import AppLayout from './ui/AppLayout';
import Loader from './ui/Loader';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LogIn />} />
    //     <Route path="/app/*" element={<AppLayout />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
