import React, { useState } from 'react'
import Header from '../../components/header/Header'
import './practitioner.css'
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from 'react-router-dom'
import Booking from '../../components/book/Booking';
import Footer from '../../components/footer/Footer';

function Practitioner() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
const {data, loading, error, reFetch} = useFetch(`http://localhost:4000/practitioners/find/${id}`);


//................................ last edit
const navigate = useNavigate();
const [open, setOpen] = useState(false);


const handleClick = () => {
setOpen(true)
}

//....................................
  return (
    <>
      <Header type="smallHeader" />

      <div className="practitionerContainer">
        <div className="practitionerRow">
            <div className="practitionerCol">
              <h2 className='practitionerTitle'>{data.practiceName}</h2>
              <span>{data.city}</span><br /><br />
              <h3><strong>{data.firstName} {data.lastName}</strong></h3>
            </div>
            <div className="practitionerCol">
              <button className="practitionerBtn" onClick={handleClick}>Enquire Now</button>
            </div>
        </div>
        <div className="practitionerRow">
        {data.category}        </div>
        <div className="practitionerRow">
          <h3 className='practitionerSubTitle'>{data.modality}</h3>
          <p className="practitionerDesc"><img src={data.image}/>
          </p>
        </div>
        
        
      </div>
      <Footer />

      {open && <Booking setOpen={setOpen} practitionerId={id}/>}
    </>
  )
}

export default Practitioner
