import React from "react";
import CardHeader from "../Components/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Food from '../Assets/Images/food-small.jpg'
import ListBox from "../Components/ListBox";
import ListBoxItem from "../Components/ListBoxItem";
import useSingleDish from "../Hooks/useSingleDish";

const SingleDish : React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const foodListId = id ? parseInt(id, 10) : NaN;

    const {singleDish, loading, error} = useSingleDish(foodListId)

    return (
        <div className="flex-grow space-y-4">
            <CardHeader title={`Potrawa`} subtitle="Potrawa">
                <FontAwesomeIcon
                    icon={faList}
                    className="me-auto h-8 text-brand-warm"
                />
            </CardHeader>
            {singleDish ? <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 flex">
                    <img src={Food} alt="Food" srcSet="" className='rounded-md animate-slide-down-slow border border-solid border-black mb-auto'/>
                </div>
                <div className="col-span-2">
                    <ListBox>
                        <ListBoxItem label="Nazwa">
                            <h6>{singleDish.dishName}</h6>
                        </ListBoxItem>
                         <ListBoxItem label="Kalorie">
                            <h6>nazwa</h6>
                        </ListBoxItem>
                         <ListBoxItem label="Waga">
                            <h6>nazwa</h6>
                        </ListBoxItem>
                         <ListBoxItem label="Porcje">
                            <span>{singleDish.dishParts}</span>
                        </ListBoxItem>
                        <ListBoxItem label="Składniki">
                            <span>{singleDish.dishIngredients}</span>
                        </ListBoxItem>
                        <ListBoxItem label="Sposób przygotowania">
                            <span>{singleDish.dishPreparing}</span>
                        </ListBoxItem>
                    </ListBox>
                </div>
            </div> : <h6>Nie znaleziono</h6>}
        </div>
    )
}

export default SingleDish