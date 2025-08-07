import React from "react";
import GridCardTemplate from "./GridCardTemplate";
import FoodSmall from '../Assets/Images/food-small.jpg'
import { DishProps } from "../Models/DishProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUtensils } from "@fortawesome/free-solid-svg-icons";
import MainButton from "./MainButton";


const DishTemplate : React.FC<DishProps> = ({ dishId, dishName, dishIngredients, dishPreparing, dishParts }) => {
    return (
        <GridCardTemplate>
            <div className={`rounded-md overflow-hidden px-3 py-3 bg-primary flex flex-col space-y-3 transition-all -rotate-[1.15deg] hover:rotate-0 hover:scale-[1.05] cursor-pointer`}>
                {/* <img src={FoodSmall} alt="" srcSet="" className="rounded-sm"/> */}
                <div className="flex flex-row space-x-3">
                    <div className="flex flex-col space-y-1 bg-brand-warm/60 rounded-md px-3 py-2">
                        <small>Porcje</small>
                        <div className="flex flex-row space-x-1">
                            <FontAwesomeIcon icon={faUtensils}/>
                            <p className="text-md my-auto">{dishParts}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 bg-brand-warm/60 rounded-md px-3 py-2">
                        <small>Kalorie</small>
                        <div className="flex flex-row space-x-1">
                            <FontAwesomeIcon icon={faUtensils}/>
                            <p className="text-md my-auto">{dishParts}</p>
                        </div>
                    </div>
                </div>
                <h4>{dishName}</h4>
                <div className="flex flex-col space-y-1">
                    <small>Składniki</small>
                    <p className="text-sm">{dishIngredients}</p>
                </div>
            </div>
        </GridCardTemplate>
    )
}

export default DishTemplate