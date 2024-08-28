import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from "react"
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Personal from './components/Personal';
import Professional from './components/Professional';
import Login from './components/Login';
import { AuthProvider } from './components/auth';


const LazyAbout=React.lazy(()=>import('./components/About/About'))



function App() {
  return (
    <AuthProvider>
    
      <BrowserRouter>
      <Navbar/>
      <Home/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<React.Suspense><LazyAbout/></React.Suspense>}/>
          <Route path="/contact" element={<Contact/>}>
               <Route path="personal" element={<Personal/>}/>
               <Route path="professional" element={<Professional/>}/>
          </Route>
          <Route element={NotFound}/>
         
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
