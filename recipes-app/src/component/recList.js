import React, { useState } from 'react';
import '../styles/rec.css'

function RecList() {
    const recipes = [
        { 
            id: 1, 
            name: 'Spaghetti Bolognese', 
            ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic']
        }, 
        { 
            id: 2, 
            name: 'Caesar Salad', 
            ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing', 'chicken breast']
        }, 
        { 
            id: 3, 
            name: 'Chocolate Cake', 
            ingredients: ['flour', 'sugar', 'cocoa powder', 'baking powder', 'eggs', 'milk', 'butter']
        },
        { 
            id: 4, 
            name: 'Pizza Pasta', 
            ingredients: ['Pasta', 'tomato sauce', 'parmesan cheese', 'mushroom', 'pepperoni', 'olives']
        }
    ];

    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [checkedItems, setCheckedItems] = useState([]);

    const handleClick = (recipe, event) => {
        event.preventDefault(); // Prevent default link behavior
        setSelectedRecipe(recipe);
        setCheckedItems([]); // Reset checked items when a new recipe is selected
    };

    const handleCheckboxChange = (ingredient) => {
        setCheckedItems((prevCheckedItems) => {
            if (prevCheckedItems.includes(ingredient)) {
                return prevCheckedItems.filter(item => item !== ingredient);
            } else {
                return [...prevCheckedItems, ingredient];
            }
        });
    };

    return (
        <div>
            <div className='reclist'>
                {recipes.map(recipe => (
                    <a 
                        key={recipe.id} 
                        href={recipe.id}
                        id={`rec-${recipe.id}`} 
                        onClick={(event) => handleClick(recipe, event)}
                        className="recipeLink"
                    >
                        {recipe.name}
                    </a>
                ))}
            </div>
            {selectedRecipe && (
                <div className="detailsDiv">
                    <ul>
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                            <li key={index} className={`item ${checkedItems.includes(ingredient) ? 'checked' : ''}`}>
                                <input 
                                    class='check'
                                    type='checkbox' 
                                    id={`checkbox-${index}`} 
                                    checked={checkedItems.includes(ingredient)}
                                    onChange={() => handleCheckboxChange(ingredient)} 
                                />
                                <label id='ing' htmlFor={`checkbox-${index}`} className='label'>
                                    {ingredient}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default RecList;
