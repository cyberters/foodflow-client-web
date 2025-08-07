import { faFacebook, faInstagram, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterPage: React.FC = () => {
  return (
    <footer className="border border-black border-solid rounded-md px-4 py-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-x divide-dashed divide-brand-warm">
        <div className="pr-6">
          <h4 className="text-2xl font-bold">food.flow</h4>
          <p className="mt-2 text-sm w-3/5">
            Twój pomocnik w codziennym planowaniu zakupów i posiłków. Szybciej. Mądrzej. Wspólnie.
          </p>
        </div>
        <div className="px-3">
          <h5 className="font-semibold mb-2">Nawigacja</h5>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Strona główna</Link></li>
            <li><Link to="/about" className="hover:underline">O nas</Link></li>
            <li><Link to="/family" className="hover:underline">Twoja rodzina</Link></li>
          </ul>
        </div>
        <div className="pl-3">
          <h5 className="font-semibold mb-2">Śledź nas</h5>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faSlack} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage
