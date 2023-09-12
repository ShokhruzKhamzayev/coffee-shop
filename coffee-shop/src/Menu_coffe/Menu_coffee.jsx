import React from 'react'

export default function Menu_coffee() {
  return (
    <div className='menu-coffee' id='list-coffee'>
        <div className="list-coffee">
            <h2>Espresso</h2>
            <p>Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.</p>
            <button className='for-buying'>Add to cart</button>
        </div>
        <div className="list-coffee">
            <h2>Latte</h2>
            <p>The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.</p>
            <button className='for-buying'button>Add to cart</button>
        </div>
        <div className="list-coffee">
            <h2>Americano</h2>
            <p>The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.</p>
            <button className='for-buying'>Add to cart</button>
        </div>
    </div>
  )
}
