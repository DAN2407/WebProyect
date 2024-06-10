import React from 'react'
import VigilanteHeader from '../../components/VigilanteHeader/VigilanteHeader'
import VigilanteValidarQR from '../../components/VigilanteValidarQR/VigilanteValidarQR'

const ValidarQR = () => {
  return (
    <div>
      <VigilanteHeader />
      <div className="container">
        
        <VigilanteValidarQR />
      </div>
    </div>
  )
}

export default ValidarQR