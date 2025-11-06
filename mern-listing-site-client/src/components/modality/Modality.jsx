import React from "react";
import { Link } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import './modality.css'

function Modality() {
 
const {data, loading, error} = useFetch("http://localhost:4000/practitioners/search/bymodality?modality=yoga,meditation,fitness,cbt,psychiatry");
console.log(data);

  return (
    <div className="cities">
      <h2 className="cityTitle">Browse Practitioners by Top Modalities</h2>

      <p className="cityDesc">Find practitioners based on the top modalities</p>

      <div className="cityImages">
      {loading ? (<h2>Loading...</h2>) : (
                <>
        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/zMLf8b0.png" />
          </div>
          <h4 className="cityImgTitle">Yoga</h4>
          <span className="cityImgPractitioners">{data[0]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/lIiVivc.png" />
          </div>
          <h4 className="cityImgTitle">Meditation</h4>
          <span className="cityImgPractitioners">{data[1]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/2vgygNe.png" />
          </div>
          <h4 className="cityImgTitle">Fitness</h4>
          <span className="cityImgPractitioners">{data[2]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/v0SHbjw.png" />
          </div>
          <h4 className="cityImgTitle">Cognitive Behavior Therapy</h4>
          <span className="cityImgPractitioners">{data[3]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://i.imgur.com/IHv0ErT.png" />
          </div>
          <h4 className="cityImgTitle">Psychiatry</h4>
          <span className="cityImgPractitioners">{data[4]} practitioners</span>
        </div>



        </>
            )}
        </div>
    </div>
  )
}


export default Modality
