import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/InmuebleCard.css'
export default function InmuebleCard() {
    const [properties, setProperties] = useState([])

    useEffect(()=>{
        if(properties)
        axios.get("http://localhost:3500/api")
            .then(response => setProperties(response.data.properties))

    },[setProperties])
    console.log(properties)

    const printCard = (item)=>(
        <div className='inmueble-card'>
            <img className='inmueble-img' src='foto1.jpeg' />
            <div className='inmueble-info'>
                <div className='inmueble-info-div'>
                    <p className='inmueble-info-p'>Bedrooms</p>
                    <span className='inmueble-span'>3</span>
                </div>
                <div className='inmueble-info-div'>
                    <p className='inmueble-info-p'>Toilets</p>
                    <span className='inmueble-span'>2</span>
                </div>
                <div className='inmueble-info-div'>
                    <p className='inmueble-info-p'>M2</p>
                    <span className='inmueble-span'>150</span>
                </div>
                <div className='inmueble-info-div'>
                    <p className='inmueble-info-p'>M2 Covered</p>
                    <span className='inmueble-span'>100,45</span>
                </div>
            </div>
            <h4>Price: $ {item.price}</h4>
        </div>
    )
  return (
    <div className=' mt-4 d-flex flex-wrap gap-3'>
        {properties?.map(printCard)}
    </div>
  )
}
