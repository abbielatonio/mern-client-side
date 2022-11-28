import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ItemPractitioners from '../../components/itemPractitioners/itemPractitioners.jsx'
import { useLocation } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import Footer from '../../components/footer/Footer'


function SpiritPractitioners() {
  //....................................................................useLocation function stores its return value into the location variable so that it can be accessed throughout the program.
  const location = useLocation();
  // const [city, setCity] = useState(location.state.city)
  // const [category, setCategory] = useState(location.state.category)
  
  
  // const {data, loading, error} = useFetch(`http://localhost:4000/practitioners?city=${city}&modality=${modality}`);
  
  const {data, loading, error} = useFetch(`http://localhost:4000/practitioners?category=Spirit&deleted=false`);
  
  
  return (  //............cut searchbar sa ibang pagess
  <div>
   <Header type="smallHeader"/> 
  <div className="practitionersContainer">
  <div className="practitionersRow">
  <div className="practitionersCol">
  
  
  
  <div className='searchPractitioners'>
  
  
  <div className="search">
          {/* <div className="searchItem">
         <span>You city</span>
  <input type="text" placeholder={city} />
          </div>
  
          <div className="searchItem">
          <span>Category</span>
          <input type="text" placeholder={category} />
  
          </div> */}
  
  
          <div className="searchItem">
          <span>Modality of choice</span>
          <input type="text" placeholder="test" />
  
            </div>
  
          
            <div className="searchItem">
                          <button className='btnSearch'>           
  Search</button>
            </div>
          </div>
      </div>
  
  
  
  
  </div>
  <div className="practitionersCol">
  
  
  
  
  <div className='listPractitioners'>
  {
  loading ? (<h2>Loading..</h2>) : (
  <>
  {data.map((item) => (
  <ItemPractitioners item={item} key={item._id} />
  ))}  
  </>
  )
  }
  </div>
  
  
  
  </div>
  </div>
  </div>
  <Footer/>
  </div>
  )
  }
  
export default SpiritPractitioners
