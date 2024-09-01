// Get a reference to the button elements
const monsteraButton = document.querySelector('#monstera-btn');
const modal = document.querySelector('#plant-modal');
const closeButton = document.querySelector('.close');
const plantInfoDiv = document.querySelector('#plant-info');

const monstera = {
    light: 'Bright, indirect light.',
    watering: 'Keep soil moist but not waterlogged. Let the top one inch of soil dry out before watering again.',
    humidity: 'Prefers high humidity. Mist the leaves regularly or place a humidifier nearby.',
    fertilizer: 'Fertilize every 4-6 weeks during the drowing season.',
    temperature: 'Prefers temperatures between 65-80°F.',
    soil: 'Use a well draining potting mix consisting of 2 parts regualr potting mix, 1 part perlite, and 1 part orchid bark.',
};

const showPlantDetails = function(plant) {
    // Clear previous plant info
    plantInfoDiv.innerHTML = '';
    // Create an unordered list to display plant details
    const ul = document.createElement('ul');
    // Iterate over the plant object and create list items
    for (const key in plant) {
        const li = document.createElement('li');
        li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${plant[key]}`;
        ul.appendChild(li);
    }
    // Append this list to the plant-info div
    plantInfoDiv.appendChild(ul);
    // Display the modal
    modal.style.display = 'flex';
};

// Add event listeners to buttons
monsteraButton.addEventListener('click', function() {
    showPlantDetails(monstera);
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function() {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});