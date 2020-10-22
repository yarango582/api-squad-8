export default class Category {
    getCategory() {
        fetch(`https://opentdb.com/api_category.php`)
            .then((response) => response.json())
            .then((data) => this.listCategory(data.trivia_categories));
    }
    
    listCategory(category) {
        let formCategory = document.getElementById("category");
        formCategory.innerHTML = "";
        formCategory.innerHTML = `<option value="all">Todas las Categorias</option>`;
        category.forEach((question) => {
            let row = `<option value="${question.id}">${question.name}</option>`;
            formCategory.innerHTML += row;
        });
    }
}