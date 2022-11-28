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
            <img src="https://iili.io/H3dipxn.md.png" />
          </div>
     <h4 className="cityImgTitle">Manila</h4>
          <span className="cityImgPractitioners">{data[0]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H3dLkj1.md.png" />
          </div>
          <h4 className="cityImgTitle">Makati</h4>
          <span className="cityImgPractitioners">{data[1]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H3dgAJ9.md.png" />
          </div>
          <h4 className="cityImgTitle">Paranaque</h4>
          <span className="cityImgPractitioners">{data[2]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H3dQE9p.md.png" />
          </div>
          <h4 className="cityImgTitle">Bulacan</h4>
          <span className="cityImgPractitioners">{data[3]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H3dLvZF.md.png" />
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
