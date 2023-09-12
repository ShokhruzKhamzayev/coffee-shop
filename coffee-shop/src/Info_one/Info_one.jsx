import React from 'react'
import content from '../assets/info-one-content.png'

export default function Info_one() {
  return (
    <div className='info-one' id='info-one'>
         <div className="img-info-one">
            <img src={content} alt="" />
            <span className='for-laptop'>about us</span>
        </div>
        <div className="text-info-one container">
            <h2 className='info-header'>Coffee Shop Samwayle</h2>
            <p className='info-p'>Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand of the buyer.
            But this is exactly the moment when a connection arises between us and our guests. <br></br><br></br> 
            And we strive to do our best to maintain this connection - starting with our commitment to selecting the highest quality coffee in the world and ending with how we interact with guests and organizations to fulfill our obligations.</p>
        </div>
    </div>
  )
}
