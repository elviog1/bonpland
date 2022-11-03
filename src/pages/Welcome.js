import React from 'react'
import InmuebleCard from '../components/InmuebleCard'
import '../styles/Welcome.css'
export default function Welcome() {
  return (
    <>
      <div className='welcome-img container flex-column'>
        <h1 className='title'>BONPLAND</h1>
        <div className='welcome-inputs'>
          <input type="search" />
            <div className='welcome-buttons'>
              <button>Compra</button>
              <button>Venta</button>
              <button>Alquiler</button>
            </div>
          </div>
      </div>
      <div className='d-flex flex-wrap gap-3 justify-content-center'>
        <InmuebleCard />
        
      </div>
    </>
  )
}
