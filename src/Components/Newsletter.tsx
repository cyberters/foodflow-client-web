import { faClock, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Newsletter: React.FC = () => {
  return (
    <div className="flex bg-gradient-to-r from-brand-normal to-brand-light rounded-md px-4 py-3">
      <div
          id="liquid"
          className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-md border border-white/30 shadow-lg mx-auto text-white flex flex-col space-y-6 mx-auto"
        >
          <div className="flex flex-col space-y-2">
            <FontAwesomeIcon icon={faClock} className="h-4 lg:h-6 mx-auto" />
            <h4 className="text-xl lg:text-2xl mx-auto text-center">Poznaj naszą melodię postępów i nuty inspiracji!</h4>
          </div>
          <p className='lg:w-2/5 mx-auto text-center'>Zapraszamy Cię do wyjątkowej podróży przez świat naszych działań, gdzie każdy krok to nowa nuta, a każda ciekawostka to inspirująca melodia.
Śledź z nami rozwój projektu i zanurz się w rytmie innowacji, które tworzymy z pasją i zaangażowaniem.
Razem komponujemy przyszłość, a Ty możesz być częścią tej harmonii!</p>
          <a
            href={`https://www.linkedin.com/company/food-flow-ai`}
            className={`bg-primary text-black border border-solid border-black transition-all px-3 py-2 rounded-md mx-auto`}
          >
            <span>Dołącz do nas na LinkedIn!</span>
        </a>
      </div>  
    </div>
  )
}

export default Newsletter
