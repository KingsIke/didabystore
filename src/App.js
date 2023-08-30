import './App.css';
import React from 'react';
import Signup from './components/signUp/signup'
import Signin from './components/signIn/signin'
import Footer from './components/footer/footer'
import MultiColumnLayout from './components/testing/test'



import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    < React.Fragment >
    <Router>
      <div className="App">
        {/* <Navbar /> */}

        <div className="content">
          <Routes>
            <Route path='/signup' element={< Signup/>} />
            <Route path='/' element={< Signin/>} />
            <Route path='/footer' element={< Footer/>} />
            <Route path='/test' element={< MultiColumnLayout/>} />


            

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
