import React, { useState } from 'react';
import ListBox from './ListBox';
import ListBoxItem from './ListBoxItem';
import GridTemplate from './GridTemplate';
import DishTemplate from './DishTemplate';
import { FoodListProps } from '../Models/FoodListProps';

interface FoodListsShowProps {
    foodLists: FoodListProps[]
}

const FoodListsShow : React.FC<FoodListsShowProps> = ({foodLists}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!foodLists || foodLists.length === 0) return null;

    const currentFoodList = foodLists[currentIndex];

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < foodLists.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="col-span-2">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Poprzedni
                </button>
                <span className="text-lg font-semibold">Dzień {currentFoodList.dayNumber}</span>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === foodLists.length - 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Następny
                </button>
            </div>
            <ListBox>
                <ListBoxItem label={`Dzień ${currentFoodList.dayNumber}`}>
                    <GridTemplate>
                        {currentFoodList.dayPropositions.map((proposition, index) => (
                            <div key={index}>
                                <ListBoxItem label={`Pora dnia: ${proposition.dayTimeName}`} />
                                    <div className="flex flex-col space-y-3">
                                        {proposition.selectedDishes.map((dish) => (
                                            <DishTemplate
                                                key={dish.dishId}
                                                dishId={dish.dishId}
                                                dishName={dish.dishName}
                                                dishIngredients={dish.dishIngredients}
                                                dishPreparing={dish.dishPreparing}
                                                dishParts={dish.dishParts}
                                            />
                                        ))}
                                    </div>
                            </div>
                        ))}
                    </GridTemplate>
                </ListBoxItem>
            </ListBox>
            <div className="flex justify-center space-x-2 mt-4">
                {foodLists.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-400'
                        }`}
                        aria-label={`Przejdź do dnia ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodListsShow;
