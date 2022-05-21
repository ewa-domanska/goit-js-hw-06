const categories = document.getElementById("categories");
const numberOfCategories = categories.children.length;
console.log("Number of categories: " + numberOfCategories);
for (const category of categories.children) {
    const categoryName = category.getElementsByTagName("h2")[0]
    console.log("Category: " + categoryName.innerText)

    const categoryList = category.getElementsByTagName("ul")[0]
    const elementsCount = categoryList.children.length;
    console.log("Elements: " + elementsCount)
}
