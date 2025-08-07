import { useState } from "react"
import ListBoxItem from "./ListBoxItem"
import { Link } from "react-router-dom"
import DishTemplate from "./DishTemplate"
import { FoodListProps } from "../Models/FoodListProps"
import { DayProps } from "../Models/DayProps"
import ListBox from "./ListBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

interface DayPaginationProps {
  days: DayProps[];
}

const DayPagination: React.FC<DayPaginationProps> = ({ days }) => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const currentDay = days[currentPage]

  return (
    <ListBox>
      <ListBoxItem label={`Dzień: ${currentDay.dayNumber}`} />
        <div className="flex justify-center space-x-4 py-2">
            <button
                className="px-4 py-2 bg-brand-warm/20 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
            >
            <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <span className="my-auto">
            Dzień {currentDay.dayNumber} z {days.length}
            </span>
            <button
            className="px-4 py-2 bg-brand-warm/20 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, days.length - 1))}
            disabled={currentPage === days.length - 1}
            >
            <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </div>

      <div className="grid grid-cols-4 gap-4 pt-2 pb-3">
        {currentDay.dayPropositions.map((day) => (
          <div key={day.dayPropositionId} className="flex flex-col space-y-3">
            <ListBoxItem
              label={`Część: ${day.dayPropositionPartName} | Kalorie: ${day.dayPropositionCaloriesLimitValue}`}
            />
            {day.dishes.map((dish) => (
              <Link key={dish.dishId} to={`/dashboard/dish/${dish.dishId}`}>
                <DishTemplate
                  dishId={dish.dishId}
                  dishName={dish.dishName}
                  dishIngredients={dish.dishIngredients}
                  dishPreparing={dish.dishPreparing}
                  dishParts={dish.dishParts}
                />
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 py-2">
        <button
          className="px-4 py-2 bg-brand-warm/20 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
        <span className="my-auto">
          Dzień {currentDay.dayNumber} z {days.length}
        </span>
        <button
          className="px-4 py-2 bg-brand-warm/20 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, days.length - 1))}
          disabled={currentPage === days.length - 1}
        >
          <FontAwesomeIcon icon={faArrowRight}/>
        </button>
      </div>
    </ListBox>
  );
};

export default DayPagination;
