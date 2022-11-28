import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import EnquiryForm from '../enquiry/EnquiryForm';
import './book.css';

function Booking({setOpen, practitionerId}) {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
const {data, loading, error, reFetch} = useFetch(`http://localhost:4000/practitioners/find/${id}`);

  return (
    <div className='bookingcontainer'>
      <div className="bookingbox">
      <div className="bookingcol">
        <FontAwesomeIcon icon={faCircleXmark} className="bookingClose" onClick={() => setOpen(false)} />
        </div>
        <div className="bookingcol">
        <div className="bookingdiv">
              <span className="booking-select">          If you want to book a consultation with:
</span>
<div className="bookingcontentinfo">
<div className="booking"> practice name:  <strong> {data.practiceName}</strong></div>
<div className="booking"> practitioner name:  <strong> {data.firstName} {data.lastName}</strong></div>
<div className="booking"> modality:  <strong> {data.modality}</strong></div>

<div className="bookingrom">
        
        pls fill up the form below:               <EnquiryForm/>
 </div>

        </div>
        </div></div>
      </div>
      </div>
  )
}

export default Booking