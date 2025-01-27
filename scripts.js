const foodCalories = {
    "Ragi Malt": 200,
    "Idly": 58,
    "Dosa": 168,
    "Puliogare": 300,
    "Milk": 42,
    "Roti": 100,
    "Rice": 130,
    "Fruits": 50,
    "Veggies": 35,
    "Chapati": 70
};

let totalCaloriesConsumed = 0;
let totalCaloriesBurnt = 0;

function updateCalories(meal) {
    let food = document.getElementById(meal).value;
    document.getElementById(`${meal}-calories`).innerText = foodCalories[food] ? `${foodCalories[food]} cal` : '0 cal';
}

function checkCaloriesConsumed() {
    let meals = ['breakfast', 'lunch', 'evening', 'dinner'];
    totalCaloriesConsumed = 0;

    meals.forEach(meal => {
        let food = document.getElementById(meal).value;
        if (foodCalories[food]) {
            totalCaloriesConsumed += foodCalories[food];
        }
    });

    document.getElementById('total-calories-consumed').innerText = totalCaloriesConsumed;
}

function checkCaloriesBurnt() {
    let morningMins = parseInt(document.getElementById('morning-mins').value) || 0;
    let eveningMins = parseInt(document.getElementById('evening-mins').value) || 0;
    let weight = parseInt(document.getElementById('weight').value) || 0;

    if (weight === 0) {
        alert("Please enter your weight.");
        return;
    }

    let metValue = 5;  // Assuming MET value for general exercise
    totalCaloriesBurnt = (morningMins + eveningMins) * (metValue * 3.5 * weight) / 200;
    document.getElementById('total-calories-burnt').innerText = totalCaloriesBurnt.toFixed(2);
}

function setDateTime() {
    document.getElementById('calendar').valueAsDate = new Date();
}

function generateReport() {
    let date = document.getElementById('calendar').value;
    let sugarItems = document.getElementById('sugar-items').value;
    let message = sugarItems ? `You had sugar: ${sugarItems}. Stay mindful!` : 'Great job avoiding sugar!';
    document.getElementById('report').innerText = message;
    localStorage.setItem(date, message);
}

function loadReport() {
    let date = document.getElementById('calendar').value;
    document.getElementById('report').innerText = localStorage.getItem(date) || 'No data for this date.';
}

function displayDrinkRecipe() {
    const recipes = {
        "Lemon Detox Water": "Ingredients: Water, Lemon, Honey. Mix and drink in the morning.",
        "Ginger Tea": "Ingredients: Water, Ginger, Honey. Boil water with ginger and add honey to taste.",
        "Cucumber Mint Water": "Ingredients: Water, Cucumber, Mint leaves. Mix and let sit overnight.",
        "Cinnamon Apple Drink": "Ingredients: Water, Cinnamon, Apple slices. Let sit overnight and enjoy.",
        "Green Tea": "Ingredients: Water, Green Tea leaves. Steep and enjoy.",
        "Jeera Water": "Ingredients: Water, Cumin Seeds. Boil and drink.",
        "Pineapple Juice": "Ingredients: Pineapple, Water, Ice. Blend and enjoy."
    };

    let selectedDrink = document.getElementById("drink").value;
    document.getElementById("drink-recipe").innerText = recipes[selectedDrink] || '';
    document.getElementById("drink-recipe").style.display = selectedDrink ? 'block' : 'none';
}
