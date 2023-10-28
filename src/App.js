import './App.css';
import React from 'react';
import Signup from './components/signUp/signup'
import Signin from './components/signIn/signin'
import Footer from './components/footer/FooterD'
import MultiColumnLayout from './components/Category/Category'
import Card from './components/Body/computer'
import Search from './components/Nav/Searchbar/searchbar'
import Search1 from './components/Product/Fashion/Fashion'
import See from './components/Category/Category'
import Cat from './components/Category/Testing'
import Product from './components/Product/All/All'
import Arrival from './components/NewArrival/Arrival'

import Fashion from './components/Product/ProductBody/ProductBody'
import Beauty from './components/Product/Beauty/Beauty'
import Phone from './components/Product/Phone/Phone-Tab'
import Laptop from './components/Product/Laptop-Comp/Laptop-Com'
import Kids from './components/Product/Kids/Kids'
import Electronics from './components/Product/Electronics/Electronics'
import Groceries from './components/Product/Groceries/Groceries'
import Health from './components/Product/Health/Health'
import Appliance from './components/Product/Appliance/Appliance'





















import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/Nav/DropNav/DropNav';
function App() {
  return (
    < React.Fragment >
    <Router>
      <div className="App">
        {/* <Navbar /> */}

        <div className="">
          <Routes>
            <Route path='/signup' element={< Signup/>} />
            <Route path='/' element={< Signin/>} />
            <Route path='/home' element={< Search/>} />
            <Route path='/product' element={< Product/>} />
            <Route path='/fashion' element={< Fashion/>} />
            <Route path='/beauty' element={< Beauty/>} />
            <Route path='/phone' element={< Phone/>} />
            <Route path='/laptop' element={< Laptop/>} />
            <Route path='/kids' element={< Kids/>} />
            <Route path='/electronics' element={< Electronics/>} />
            <Route path='/groceries' element={< Groceries/>} />
            <Route path='/health' element={< Health/>} />
            <Route path='/appliance' element={< Appliance/>} />
            <Route path='/arrival' element={< Arrival/>} />




            

            



            



          
            <Route path='/nav' element={< NavBar/>} />

            <Route path='/footer' element={< Footer/>} />
            <Route path='/test' element={< MultiColumnLayout/>} />
            <Route path='/board' element={< Card/>} />
            <Route path='/h' element={< Search1/>} />
            <Route path='/see' element={< See/>} />
            <Route path='/cat' element={< Cat/>} />


            



            {/* Dashboard */}


            

            {/* <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} /> */}



          </Routes>

        </div>
      </div>
    </Router>
  </React.Fragment >
  );
}

export default App;
