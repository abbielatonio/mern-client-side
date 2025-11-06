import React from "react";
import { Link } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import './city.css'


function City() {

const {data, loading, error} = useFetch("http://localhost:4000/practitioners/locate/bycity?city=Manila,makati,paranaque,bulacan,alabang");
console.log(data);

  return (
    <div className="cities">
      <h2 className="cityTitle">Browse Practitioners by City</h2>

      <p className="cityDesc">Find practitioners based on your area</p>

      <div className="cityImages">
      {loading ? (<h2>Loading...</h2>) : (
                <>
        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/UFFXx4V.png" />
          </div>
     <h4 className="cityImgTitle">Manila</h4>
          <span className="cityImgPractitioners">{data[0]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/8s2PA8F.png" />
          </div>
          <h4 className="cityImgTitle">Makati</h4>
          <span className="cityImgPractitioners">{data[1]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/Om5HKcF.png" />
          </div>
          <h4 className="cityImgTitle">Paranaque</h4>
          <span className="cityImgPractitioners">{data[2]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/wKwGp4F.png" />
          </div>
          <h4 className="cityImgTitle">Bulacan</h4>
          <span className="cityImgPractitioners">{data[3]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/HbsEeXu.png" />
          </div>
          <h4 className="cityImgTitle">Alabang</h4>
          <span className="cityImgPractitioners">{data[4]} practitioners</span>
        </div>



        </>
            )}
        </div>
    </div>
  )
}

export default City;
