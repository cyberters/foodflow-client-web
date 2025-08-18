import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef, useEffect } from 'react'

const faqItems = [
  {
    question: "Jak działa aplikacja i czym mi pomoże?",
    answer:
      "Nasza aplikacja pomaga planować zakupy i organizować listy zakupowe w oparciu o Twoje preferencje i potrzeby. Dzięki niej łatwiej zaplanujesz posiłki, unikniesz niepotrzebnych zakupów i ograniczysz marnowanie jedzenia."
  },
  // {
  //   question: "Czy aplikacja jest darmowa?",
  //   answer:
  //     "Tak! Podstawowe funkcje planowania zakupów i tworzenia list są całkowicie darmowe. W przyszłości planujemy wprowadzić dodatkowe opcje premium, ale podstawowa wersja pozostanie bezpłatna."
  // },
  {
    question: "Czy mogę synchronizować listy zakupów z innymi członkami rodziny?",
    answer:
      "Tak, umożliwiamy współdzielenie list zakupów w czasie rzeczywistym, dzięki czemu cała rodzina może mieć dostęp do tych samych planów i aktualizacji."
  },
  {
    question: "W czym food.flow jest lepsze od ChataGPT?",
    answer:
      "Nasza aplikacja powstaje we współpracy z doświadczonymi dietetykami i ekspertami ds. żywienia, którzy z pasją i precyzją tworzą kompleksową, profesjonalną bazę wiedzy. To właśnie ona stanowi fundament działania aplikacji, zapewniając użytkownikom dostęp do rzetelnych, aktualnych i praktycznych informacji, które wspierają zdrowe i świadome wybory żywieniowe. Podczas, gdy ChatGPT gromadzi dane o wszystkim i o niczym, my chcemy się doskonalić w tym jednym obszarze, jakim jest zdrowe żywienie!"
  },
  {
    question: "Czy aplikacja uwzględnia to, co mam aktualnie w lodówce?",
    answer:
      "Tak, aplikacja dopasuje przepisy do tego, co masz pod ręką. Zaproponujemy tylko najpotrzebniejsze zakupy!"
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
    <div ref={ref} className="flex flex-col space-y-2">
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
            }}
          >
            <p className="text-gray-700 lg:w-3/5">{answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dropdown
