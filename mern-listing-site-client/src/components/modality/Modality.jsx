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
            <img src="https://iili.io/H32QarG.md.png" />
          </div>
          <h4 className="cityImgTitle">Yoga</h4>
          <span className="cityImgPractitioners">{data[0]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H32sm9p.md.png" />
          </div>
          <h4 className="cityImgTitle">Meditation</h4>
          <span className="cityImgPractitioners">{data[1]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H32ie7p.md.png" />
          </div>
          <h4 className="cityImgTitle">Fitness</h4>
          <span className="cityImgPractitioners">{data[2]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H32iFXn.md.png" />
          </div>
          <h4 className="cityImgTitle">Cognitive Behavior Therapy</h4>
          <span className="cityImgPractitioners">{data[3]} practitioners</span>
        </div>

        <div className="cityImage">
          <div className="cityImg">
            <img src="https://iili.io/H32ZDSj.md.png" />
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
