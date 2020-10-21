import Category from './category.js'
import API from './api.js'
import Questions from './questions.js'


const category = new Category
category.getCategory()

document.getElementById("get-questions").addEventListener('submit', (event) =>{
	event.preventDefault()
	const api = new API
	api.getQuestions()
})

document.getElementById("button-results").addEventListener('click', () =>{
	const questions = new Questions
	questions.imprimeResultado()
})

