const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

for (const ingredient of ingredients) {
    const vege = document.createElement("li");
    vege.textContent = ingredient
    vege.className = "item"
    const veges = document.getElementsByTagName("ul")[0]
    veges.append(vege)
}
