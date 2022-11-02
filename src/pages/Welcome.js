import React from 'react'
import '../styles/Welcome.css'
export default function Welcome() {
  return (
      <div className='welcome-img'>
        <div className='welcome-inputs'>
          <input type="search" />
            <div className='welcome-buttons'>
              <button>Compra</button>
              <button>Venta</button>
              <button>Alquiler</button>
            </div>
          </div>
      </div>
  )
}
