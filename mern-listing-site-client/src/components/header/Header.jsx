import React, { useContext, useState } from 'react'
import { faSpa, faPerson, faLeaf, faLocation, faSearch, faLocationPin, faHome, faBrain, faPersonPraying, faPersonRunning, faPrayingHands, faRunning, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //needed to show the icons
import headerlogo from "../../assets/payapalogo.png";


import { Link, useNavigate } from 'react-router-dom';
import './header.css'

function Header({type}) { //........................................type: cut searchbar in otherpages,
  //...................................................................functions

// const [city, setCity] = useState("");
// const [category, setCategory] = useState("");
const [modality, setModality] = useState("");


const navigate = useNavigate();

const handleSearch = () => {
  // navigate("/practitioners", {state: {city, category, modality}});
  navigate("/practitioners", {state: {modality}});

}

//.............................................................................header
  return (
    <div className='h-container'>
     <div className="h-row">
        <div className="h-col">
        <Link to='/'>
          <img src={headerlogo} className="logo" alt="header" /></Link>
        </div>
        <div className="h-col">
        test

        </div>

        </div>
      <div className="h-row"> 
      <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}>
          <div className="icons">
         
          <div className="icon">
          <FontAwesomeIcon icon={faPerson} />
          <Link reloadDocument to='/allpractitioners'>All Practitioners</Link></div>

          <div className="icon">
          <FontAwesomeIcon icon={faBrain} />
          <Link to='/mind'>Mind</Link></div>

          <div className="icon">
          <FontAwesomeIcon icon={faDumbbell} />
          <Link to='/body'>Body</Link></div>

          <div className="icon">
          <FontAwesomeIcon icon={faPrayingHands} />
          <Link to='/spirit'>Spirit</Link></div>

          </div>
         

        </div>



{ type !=="smallHeader" && //...............................................................searchbar
  <>
    <div className="h-col">
        <h1>Create Your Inner Peace.</h1>

          <h2>Book a Wellness Specialist Today.</h2>

        </div>
        <div className="h-col">

          <div className="search">
            {/* <div className="search-item">
            <FontAwesomeIcon icon={faLocationPin} />
<input type="text" onChange={(e) => setCity(e.target.value)} placeholder='What city?' />
            </div>

            <div className="search-item">
            <FontAwesomeIcon icon={faSpa} />
            <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder='Mind - Body - Spirit' />

            </div> */}


            <div className="search-item">
            <FontAwesomeIcon icon={faLeaf} />
            <input type="text" onChange={(e) => setModality(e.target.value)} placeholder='Modality' />

              </div>

            
          
                            <button className='btnSearch' onClick={handleSearch}>           
Search</button>
              
            </div>
        </div>
  </>
}



      
      </div>
      </div>
  )
}

export default Header