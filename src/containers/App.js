import React from 'react';

import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from './Footer'
import Home from '../components/Home';
import Projects from '../components/Projects';
import Navbar from './Navbar';

import '../styling/App.css'
import '../styling/Home.css'
import '../styling/Project.css'
import '../styling/About.css'
import '../styling/Blogs.css'
import '../styling/Contact.css'

import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

function App() {
  const location = useLocation()

  let application = (
    <>
      <div className='App'>
        <Navbar location={location} key={location.key} />
        <Routes>
          <Route path='/contact' element={<Contact />} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/blogs' element={<Blogs />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  )

  return (
    <>
      <div className='App-Container'>
        {/* {loading ? loadingComponent : application} */}
        {application}
      </div>
      <Footer />
    </>
  );
}

export default App;
