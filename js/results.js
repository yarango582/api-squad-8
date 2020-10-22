export default class Results {
    imprimeResultado(questions) {
        let answerCorrect = 0
        let answerIncorrect = 0
        let checking = 0
        // const questions = new Questions
        console.log(questions)
        questions.forEach((question) => {
            let optionChecked = ''
            let options = document.getElementsByName(`answer ${question.id}`)
            options.forEach(option => {
                if(option.checked) {
                    optionChecked = option.value
                    console.log(optionChecked)
                }
            })
            if(optionChecked === question.correct_answer) {
                answerCorrect++
            } else if(!optionChecked) {
                checking++
            } else 
                answerIncorrect++
        })
    
        if(checking > 0) {
            alert('Te faltan preguntas por responder')
        } else 
            alert(`Tienes ${answerCorrect} correctas y ${answerIncorrect} incorrectas`)
        
    }
}