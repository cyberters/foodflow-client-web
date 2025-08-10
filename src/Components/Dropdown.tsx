import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef, useEffect } from 'react'

const faqItems = [
  {
    question: "Jak działa aplikacja i czym mi pomoże?",
    answer:
      "Nasza aplikacja pomaga planować zakupy i organizować listy zakupowe w oparciu o Twoje preferencje i potrzeby. Dzięki niej łatwiej zaplanujesz posiłki, unikniesz niepotrzebnych zakupów i ograniczysz marnowanie jedzenia."
  },
  {
    question: "Czy aplikacja jest darmowa?",
    answer:
      "Tak! Podstawowe funkcje planowania zakupów i tworzenia list są całkowicie darmowe. W przyszłości planujemy wprowadzić dodatkowe opcje premium, ale podstawowa wersja pozostanie bezpłatna."
  },
  {
    question: "Czy mogę synchronizować listy zakupów z innymi członkami rodziny?",
    answer:
      "Tak, umożliwiamy współdzielenie list zakupów w czasie rzeczywistym, dzięki czemu cała rodzina może mieć dostęp do tych samych planów i aktualizacji."
  },
  {
    question: "Czy aplikacja działa offline?",
    answer:
      "Tak, większość funkcji działa również bez dostępu do internetu. Synchronizacja nastąpi automatycznie, gdy tylko urządzenie ponownie połączy się z siecią."
  },
  {
    question: "Jak mogę zgłosić sugestię lub problem?",
    answer:
      "Najlepiej skontaktować się z nami przez formularz kontaktowy na stronie, Slacka lub bezpośrednio w aplikacji w sekcji „Opinie”. Każda sugestia jest dla nas cenna i pomaga rozwijać aplikację."
  }
]

const Dropdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenIndex(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div ref={ref} className="flex flex-col space-y-2 px-3 lg:px-7">
      <small className="text-gray-600">Wybierz pytanie</small>
      {faqItems.map(({ question, answer }, index) => (
        <div
          key={index}
          className="border-b border-solid border-black flex flex-col pb-5 cursor-pointer select-none"
          onClick={() => toggleIndex(index)}
          aria-expanded={openIndex === index}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleIndex(index)
            }
          }}
        >
          <div className="flex flex-row py-5 space-x-4 items-center">
            <h4 className="flex-1 font-semibold">{question}</h4>
            <FontAwesomeIcon
              icon={faArrowDown}
              className={`transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </div>
          <div
            style={{
              maxHeight: openIndex === index ? '500px' : '0',
              opacity: openIndex === index ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s ease, opacity 0.4s ease',
              width: '60%',
            }}
          >
            <p className="text-gray-700">{answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dropdown
