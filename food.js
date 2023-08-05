// Sample food data
const foods = [
    { name: 'Rice', category: 'Staple' },
    { name: 'Beans', category: 'Protein' },
    { name: 'Pizza', category: 'Fast Food' },
    { name: 'Salad', category: 'Healthy' }
  ];
  
  // Function to search for food items
  function searchFood() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase();
    const foodList = document.getElementById('foodList');
    foodList.innerHTML = '';
  
    let foodFound = false;
  
    for (let i = 0; i < foods.length; i++) {
      const food = foods[i];
      const foodName = food.name.toLowerCase();
  
      if (foodName.includes(searchText)) {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.textContent = food.name + ' - ' + food.category;
        foodList.appendChild(foodItem);
        foodFound = true;
      }
    }
  
    if (!foodFound) {
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Food not available. Please try again.';
      errorMessage.classList.add('error-message');
      foodList.appendChild(errorMessage);
      console.error("Error message: ", errorMessage.textContent);
    }
  }
  
  //Error message is vital.
 
