import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';


function Category() {

  const {data, loading, error} = useFetch("http://localhost:4000/practitioners/search/bycategory");
  //console.log(data);

  const images = [
    "https://iili.io/Hdpj8Be.md.png",
      "https://iili.io/Hdpjh74.md.png",
      "https://iili.io/HdpjOIS.md.png",
 
  ];

  return (
    <div className='categoryContainer'>
        <h2 className="categoryTitle">Browse Practitioners by Category</h2>
        <div className="cityImages">
            { loading ? (<h2>Loading...</h2>) : (<>
                
                {data && images.map((img, i) => (
                    <div className="cityImage" key={i}>
                        <Link to={data[i]?.category}>
                            <div className="categoryImg">
                                <img src={img} />
                            </div>
                            <h4 className='cityImgTitle'>{data[i]?.category}</h4>
                            <span className='cityImgPractitioners'>{data[i]?.count} practitioners</span>
                        </Link>
                    </div>
                ))}
                
            </>)}
        </div>
    </div>
  )
}
export default Category