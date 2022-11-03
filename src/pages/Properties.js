import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InmuebleCard from '../components/InmuebleCard'

export default function Properties() {
    
        
        


  return (
    <>
    <div className='properties-container container d-flex justify-content-center'>
        <div className=''>
            <h3 className='text-center'>Properties for purchase</h3>
            <div className='properties-inputs '>
                <input placeholder='Search' type="search" />
                <select  className='dropdown ms-2' >
                    <option value="Region" className='dropdown-option' >Filter </option>
                    <option value="Africa" className='dropdown-option'>Africa</option>
                    <option value="America" className='dropdown-option'>america</option>
                    <option value="Asia" className='dropdown-option'>Asia</option>
                    <option value="Europe" className='dropdown-option'>Europe</option>
                    <option value="Oceania" className='dropdown-option'>Oceania</option>
                </select>
            </div>
        </div>
    </div>
    <div className='container '>
        <InmuebleCard />
    </div>
    </>
  )
}
