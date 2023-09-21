import React from 'react'
import map from '../assets/footer-map.png'

export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="map-footer">
                <img src={map} alt="map of NC" />
            </div>
            <div className="text-footer" id='contacts'>
                <h1>Our address</h1>
                <p>110 St-Cathedral Pkwy Station</p>
                <p>4310 94th St, Flushing</p>
                <p className='for-laptop'>94-54 Corona Ave., Elmhurst</p>
                <p className='for-laptop'>5627 Van Doren St, Queens</p>
                <button className='for-phone'>
                    See more address
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="8" viewBox="0 0 23 8" fill="none">
                        <path d="M1.5 4H21M21 4C21 4 19.1716 2.17157 18 1M21 4L18 7" stroke="#444A4A" stroke-width="1.7" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
            <div className="bottom-footer">
                <p>2020 (c) - Samwyle bandtitos</p>
            </div>
    </footer>
  )
}
