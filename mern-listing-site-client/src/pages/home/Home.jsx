import React from 'react';
import Category from '../../components/category/Category';
import City from '../../components/city/City';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Modality from '../../components/modality/Modality';
import './home.css'
function Home() {
  return (
    <div>
      <Header/>
      <div className="main-container">
        <Category/>
<Modality/>
       <City/>
       <Footer />
      </div>
    </div>
  )
}

export default Home