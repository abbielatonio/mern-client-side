import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
      <div className="footerRow">
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Mind</Link>
            </li>
            <li>
              <Link to="/">Body</Link>
            </li>
            <li>
              <Link to="/">Spirit</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Practitioners in Makati</Link>
            </li>
            <li>
              <Link to="/">Practitioners in Manila</Link>
            </li>
            <li>
              <Link to="/">Practitioners in Quezon</Link>
            </li>
          
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Cognitive Behavioral Therapy</Link>
            </li>
            <li>
              <Link to="/">Cryotherapy</Link>
            </li>
            <li>
              <Link to="/">Meditation</Link>
            </li>
            <li>
              <Link to="/">Yoga</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">About PayapaPH</Link>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="footerRow">
          <div className="footerCol">
              <p className="copyrights">&copy; 2022. PayapaPH</p>
          </div>
      </div>
    </div>
  )
}

export default Footer