import React from 'react'
import main_content from '../assets/main-content.png'
import fc from '../assets/fc.png'
import insta from '../assets/insta.png'
import twit from '../assets/twit.png'

export default function Main() {
  return (
    <main>
        <div className="text-main">
            <span>Drink coffee, enjoy with Samwyle</span>
            <h1>Coffee Shop</h1>
            <button>
                Order Here
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8" fill="none">
                    <path d="M1 4H26M26 4C26 4 24.1716 2.17157 23 1M26 4L23 7" stroke="white" stroke-width="1.7" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
        <div className="img-main for-laptop">
          <img className='main-content' src={main_content} alt="" />
          <div className="follow-section for-laptop">
            <div className="text-follow">
              <span>Follow us</span>
            </div>
            <div className="links-follow">
              <a href="">
                <img src={fc} alt="" />
              </a>
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={twit} alt="" />
              </a>
            </div>
          </div>
        </div>
    </main>
  )
}
