import './App.css';
import {
   BrowserRouter, Routes, Route,
 } from 'react-router-dom';
import Header from "./component/Header";
import Footer from './component/footer';
import HomePage from './component/HomePage';
import Create from './component/Create';
import Update from './component/Update';
import Read from './component/Read';

function App() {
    
  return (
    <div>
      <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/Create" element={<Create />}>
      </Route> 
      <Route path="/Update" element={<Update />}>
      </Route> 
      <Route path="/Read" element={<Read />}>
      </Route> 
    </Routes>
  </BrowserRouter>
  <Footer /> 
  </div>
  );
}

export default App;