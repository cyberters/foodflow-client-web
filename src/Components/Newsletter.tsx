import { faClock, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Zapisano e-mail:", email)
    setEmail('')
  }

  return (
    <div className="grid grid-cols-3 gap-8 bg-gradient-to-r from-brand-normal to-brand-light rounded-md px-8 py-7">
      <div className="col-span-2 flex flex-col space-y-6">
        <FontAwesomeIcon icon={faClock} className="h-8 me-auto" />
        <h4 className="text-3xl mb-auto">Nad czym teraz pracujemy?</h4>
        
      </div>
      <div className="col-span-1 flex flex-col space-y-6 items-center">
        <FontAwesomeIcon icon={faNewspaper} className="h-8" />
        <h4 className="text-3xl font-bold">Masz minutę? Zbudujmy to razem!</h4>

        <p className="leading-relaxed">
          Tworzymy aplikację, która ma ułatwiać codzienne planowanie zakupów i przywracać radość z domowego gotowania. <br />
          Budujemy ją z myślą o Tobie — dlatego Twoje zdanie naprawdę się liczy. <br />
          Masz pomysł, co można ulepszyć? Coś nie działa, jak powinno? <br />
          A może po prostu chcesz dać znać, że gotowanie znów zaczęło sprawiać Ci frajdę? <br />
          <strong>Podziel się swoją opinią lub zostaw e-mail — damy znać, gdy aplikacja będzie gotowa!</strong>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <input
            type="email"
            placeholder="Twój adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded-md text-brand-normal w-full"
          />
          <button
            type="submit"
            className="bg-white text-brand-normal font-semibold px-6 py-2 rounded-md hover:bg-brand-light transition"
          >
            Zapisz się
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
