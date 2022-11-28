import React from "react";
import { Link } from "react-router-dom";
import "./itempractitioners.css";

const ItemPractitioners = ({item}) => {


  return (
    <div className="itemPractitioners">
      <div className="itemPractitionersCol">
      <img src={item.image} alt={item.firstName} />

      </div>
      <div className="itemPractitionersCol">
        <div className="itemPractitionerDivs">
          <h2>practice: {item.practiceName}</h2>
          <div className="itemPractitionerDiv">
            <span>city: {item.city}</span>
          </div>

          <div className="itemPractitionerDiv">
            <span>practitioner name: {item.firstName} {item.lastName}</span>
          </div>

          <div className="itemPractitionerDiv">
            <span>{item.email}</span>
          </div>
        </div>
      </div>
      <div className="itemPractitionersCol">
        <div className="itemPractitionersColDiv">
          <h2>{item.category}</h2>
        </div>
        <div className="itemPractitionersColDiv">
          <span>Modalities:</span><span>{item.modality}</span>
         
        </div>
        <div className="itemPractitionersColDiv">
       
        <Link to={`/practitioners/find/${item._id}`}>
                    <button>VIEW DETAILS</button>
                </Link>

        </div>
      </div>

    </div>
    
  );
};

export default ItemPractitioners;
