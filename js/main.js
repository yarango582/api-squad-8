import Category from './category.js'
import Questions from './questions.js'
import Results from './results.js'


const category = new Category
category.getCategory()

document.getElementById("get-questions").addEventListener('submit', (event) =>{
	event.preventDefault()
	const questions = new Questions
	questions.getQuestions()
})

document.getElementById("button-results").addEventListener('click', () =>{
	const results = new Results
	results.imprimeResultado()
})

