import Landing from './pages/Landing';
import Review from './pages/Review';

import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route index element={<Landing />}/>
            <Route path='review' element={<Review />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
