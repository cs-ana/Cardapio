function selectMeal(meal) {
    document.getElementById('selectedMeal').innerHTML = 
      `<h2>Você selecionou o ${meal}!</h2>`;
}

function clearSelection() {
    document.getElementById('selectedMeal').innerHTML = '';
}
